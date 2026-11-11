import type { Metadata } from 'next';
import { ContentPage } from '@/components/content-page';
import { recommendations } from '@/content/recommendations';
import { profile } from '@/content/profile';

export const metadata: Metadata = {
  title: 'Recommendations — Javeria Zaheer',
  description: 'Recommendations shared on LinkedIn by people I have worked with.',
};

export default function RecommendationsPage() {
  return (
    <ContentPage title="Recommendations" eyebrow="From people I’ve worked with" introduction="Perspectives on working together, shared on LinkedIn.">
      <div className="recommendation-list">
        {recommendations.map(recommendation => (
          <figure className="recommendation" key={recommendation.name}>
            <p className="archive-kicker"><time dateTime={recommendation.date}>{recommendation.dateLabel}</time> / LinkedIn</p>
            <blockquote cite={profile.linkedin}>
              {recommendation.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            </blockquote>
            <figcaption>
              <div><h2><a href={recommendation.profile}>{recommendation.name} ↗</a></h2><p>{recommendation.role}</p><p>{recommendation.relationship}</p></div>
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="filing-note"><a href={profile.linkedin}>Recommendations received on LinkedIn ↗</a></p>
    </ContentPage>
  );
}
