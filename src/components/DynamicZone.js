import React from 'react';
import { arrayOf, shape } from 'prop-types';
import HeroSlider from './sections/HeroSlider';
import WhoWeAre from './sections/WhoWeAre';
import InformationBlock from './sections/InformationBlock';
import ImageVariationBlock from './sections/ImageVariationsBlock';
import CooperationProcess from './sections/CooperationProcess';
import SuccessStories from './sections/SuccessStories';
import Text from './elements/Text';
import MediaBlock from './elements/MediaBlock';
import TextContent from './elements/TextContent';
import HeroContent from './sections/HeroContent';
import ClientExperienceHeroBlock from './sections/ClientExperienceHeroBlock';
import TextContentWithMedia from './sections/TextContentWithMedia';
import TextsBlock from './sections/TextsBlock';
import Filter from './sections/Filter';
import ArticleSection from './sections/ArticleSection';
import MainTechnologies from './sections/MainTechnologies';
import WeGuarantee from './sections/WeGuarantee';
import Career from './sections/Career';
import InformationTextSection from './sections/InformationTextSection';
import Blog from './sections/Blog';
import ContactUsPageScheme from './sections/ContactUsPageScheme';
import RichText from './elements/RichText';
import RecruiterSection from './sections/RecruiterSection';
import HeaderContent from './sections/HeaderContent';
import Widget from './sections/WidgetSection';
import RelatedArticles from './sections/RelatedArticles';
import Navigation from './sections/Navigation';
import UkrainianDevelopmentAdvantages from './sections/UkrainianDevelopmentAdvantages';
import AuthorSection from './sections/AuthorSection';
import Subscribe from './sections/Subscribe';
import WeAreDrivenBy from './sections/WeAreDrivenBy';
import SitemapContent from './sections/SitemapContent';
import Chatbot from './sections/Chatbot';

const DynamicZone = ({ content, components, imageWrapperWidth }) => components.map((c) => {
  switch (c.typename) {
    case 'STRAPI_ComponentSectionsHomepageHero':
      return <HeroSlider key={`${c.typename}_${c.id}`} data={c} />;
    case 'STRAPI_ComponentSectionsWhoWeAre':
      return <WhoWeAre key={`${c.typename}_${c.id}`} data={c} />;
    case 'STRAPI_ComponentSectionsInformationBlock':
      return <InformationBlock key={`${c.typename}_${c.id}`} data={c} />;
    case 'STRAPI_ComponentSectionsImageVariationsBlock':
      return <ImageVariationBlock key={`${c.typename}_${c.id}`} data={c} />;
    case 'STRAPI_ComponentSectionsStoriesSlider':
      return <SuccessStories key={`${c.typename}_${c.id}`} data={c} />;
    case 'STRAPI_ComponentSectionsCooperationProcess':
      return <CooperationProcess key={`${c.typename}_${c.id}`} data={c} />;
    case 'STRAPI_ComponentElementsText':
      return <Text key={`${c.typename}_${c.id}`} data={c.text} />;
    case 'STRAPI_ComponentElementsMediaBlock':
      return <MediaBlock key={`${c.typename}_${c.id}`} data={c} />;
    case 'STRAPI_ComponentSectionsHeaderContent':
      return <HeaderContent key={`${c.typename}_${c.id}`} data={c} />;
    case 'STRAPI_ComponentSectionsHeroContent':
      return <HeroContent key={`${c.typename}_${c.id}`} data={c} />;
    case 'STRAPI_ComponentElementsTextContent':
      return <TextContent key={`${c.typename}_${c.id}`} data={c} />;
    case 'STRAPI_ComponentSectionsTextContentWithMedia':
      return <TextContentWithMedia key={`${c.typename}_${c.id}`} data={c} />;
    case 'STRAPI_ComponentSectionsClientExperienceHeroBlock':
      return <ClientExperienceHeroBlock key={`${c.typename}_${c.id}`} data={c} />;
    case 'STRAPI_ComponentSectionsTextsBlock':
      return <TextsBlock key={`${c.typename}_${c.id}`} data={c} />;
    case 'STRAPI_ComponentSectionsFilter':
      return <Filter key={`${c.typename}_${c.id}`} data={c} />;
    case 'STRAPI_ComponentSectionsArticleSection':
      return <ArticleSection key={`${c.typename}_${c.id}`} data={c} imageWrapperWidth={imageWrapperWidth} />;
    case 'STRAPI_ComponentSectionsMainTechnologies':
      return <MainTechnologies key={`${c.typename}_${c.id}`} data={c} />;
    case 'STRAPI_ComponentSectionsWeGuarantee':
      return <WeGuarantee key={`${c.typename}_${c.id}`} data={c} />;
    case 'STRAPI_ComponentSectionsOpeningSection':
      return <Career key={`${c.typename}_${c.id}`} data={c} />;
    case 'STRAPI_ComponentSectionsInformationTextSection':
      return <InformationTextSection key={`${c.typename}_${c.id}`} data={c} />;
    case 'STRAPI_ComponentSectionsRecruiterSection':
      return <RecruiterSection key={`${c.typename}_${c.id}`} data={c} />;
    case 'STRAPI_ComponentSectionsBlogArticles':
      return <Blog key={`${c.typename}_${c.id}`} data={c.button} />;
    case 'STRAPI_ComponentSectionsContactUsPageScheme':
      return <ContactUsPageScheme key={`${c.typename}_${c.id}`} data={c} />;
    case 'STRAPI_ComponentElementsRichText':
      return <RichText key={`${c.typename}_${c.id}`} data={c} />;
    case 'STRAPI_ComponentSectionsWidgetCode':
      return <Widget key={`${c.typename}_${c.id}`} data={c.code} />;
    case 'STRAPI_ComponentSectionsRelatedArticles':
      return <RelatedArticles key={`${c.typename}_${c.id}`} data={c} />;
    case 'STRAPI_ComponentSectionsNavigation':
      return <Navigation key={`${c.typename}_${c.id}`} data={c} />;
    case 'STRAPI_ComponentSectionsAuthor':
      return <AuthorSection key={`${c.typename}_${c.id}`} content={content} data={c} />;
    case 'STRAPI_ComponentSectionsUkrainianDevelopmentAdvantages':
      return <UkrainianDevelopmentAdvantages key={`${c.typename}_${c.id}`} data={c} />;
    case 'STRAPI_ComponentSectionsSubscribe':
      return <Subscribe key={`${c.typename}_${c.id}`} data={c} />;
    case 'STRAPI_ComponentSectionsWeAreDrivenBy':
      return <WeAreDrivenBy key={`${c.typename}_${c.id}`} data={c} />;
    case 'STRAPI_ComponentSectionsSitemapSection':
      return <SitemapContent key={`${c.typename}_${c.id}`} data={c} />;
    case 'STRAPI_ComponentSectionsChatbot':
      return <Chatbot key={`${c.typename}_${c.id}`} data={c.chatbotText.text} />;
    default:
      return null;
  }
});

DynamicZone.propTypes = {
  components: arrayOf(shape()).isRequired,
};

export default DynamicZone;
