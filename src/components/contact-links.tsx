import { profile } from '@/content/profile';

export function ContactLinks() {
  return <div className="contact-links"><a href={`mailto:${profile.email}`}>{profile.email} ↗</a><a href={profile.github}>GitHub ↗</a><a href={profile.linkedin}>LinkedIn ↗</a></div>;
}
