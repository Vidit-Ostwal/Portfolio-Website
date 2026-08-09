import { experience } from '../data/experience';
import { profile } from '../data/home';
import { substackPosts } from '../data/projects';
import { showcaseProjects } from '../data/showcase-projects';

const SITE = 'https://vidit-ostwal.github.io';

function bullets(items: string[]): string {
  return items.map((item) => `- ${item}`).join('\n');
}

function block(title: string, body: string): string {
  return `\n## ${title}\n\n${body.trim()}\n`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/** Plain-text digest of the whole site for LLMs and crawlers. Built at deploy time. */
export async function buildLlmsTxt(): Promise<string> {
  const generated = new Date(
    import.meta.env.PUBLIC_SITE_UPDATED || Date.now()
  ).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  const sections: string[] = [
    `# ${profile.name}`,
    '',
    `> ${profile.description}`,
    '',
    `Site: ${SITE}`,
    `Generated: ${generated}`,
    '',
    '---',
    block(
      'Home',
      [
        `URL: ${SITE}/`,
        `Role: ${profile.role}`,
        '',
        '### My Story',
        '',
        profile.storyParagraphs.join('\n\n'),
        '',
        '### Links',
        '',
        bullets(profile.links.map((l) => `${l.label}: ${l.url}`)),
        '',
        '### Open-source contributions',
        '',
        bullets(profile.openSourceContributions.map((c) => `${c.name}: ${c.url}`)),
      ].join('\n')
    ),
    block(
      'Experience',
      [
        `URL: ${SITE}/experience`,
        '',
        ...experience.map((role) =>
          [
            `### ${role.title} — ${role.company}`,
            `Type: ${role.employmentType}`,
            `Period: ${role.start} — ${role.end}${role.current ? ' (current)' : ''}`,
            ...(role.companyUrl ? [`Company: ${role.companyUrl}`] : []),
            '',
            bullets(role.bullets),
          ].join('\n')
        ),
      ].join('\n\n')
    ),
    block(
      'Projects',
      [
        `URL: ${SITE}/projects`,
        '',
        ...showcaseProjects.map((p) =>
          [
            `### ${p.name}${p.made ? ` (${p.made})` : ''}`,
            p.tagline,
            `GitHub: ${p.github}`,
            ...(p.liveLink ? [`Live: ${p.liveLink}`] : []),
            ...(p.xPost ? [`Launch post: ${p.xPost}`] : []),
            '',
            bullets(p.bullets),
          ].join('\n')
        ),
      ].join('\n\n')
    ),
    block(
      'Writing (external)',
      [
        `URL: ${SITE}/blog`,
        '',
        ...substackPosts.map(
          (post) =>
            `- ${post.title} (${formatDate(post.date)}) — ${post.category}\n  ${post.summary}\n  ${post.url}`
        ),
      ].join('\n')
    ),
  ];

  sections.push(
    block(
      'Site map',
      bullets([
        `Home: ${SITE}/`,
        `Experience: ${SITE}/experience`,
        `Projects: ${SITE}/projects`,
        `Writing: ${SITE}/blog`,
        `LLM digest: ${SITE}/llms.txt`,
      ])
    )
  );

  return `${sections.join('\n').trim()}\n`;
}
