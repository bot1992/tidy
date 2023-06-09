/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    media: Media;
    users: User;
    pages: Page;
    'blog-posts': BlogPost;
    'blog-categories': BlogCategory;
    'support-articles': SupportArticle;
    'support-categories': SupportCategory;
    features: Feature;
    'pricing-plans': PricingPlan;
    employees: Employee;
    customers: Customer;
    faqs: Faq;
    testimonials: Testimonial;
    forms: Form;
    'form-submissions': FormSubmission;
  };
  globals: {
    header: Header;
    footer: Footer;
    'social-media': SocialMedia;
    newsletter: Newsletter;
  };
}
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
}
export interface User {
  id: string;
  name?: string;
  roles?: ('editor' | 'admin')[];
  image: string | Media;
  updatedAt: string;
  createdAt: string;
  enableAPIKey?: boolean;
  apiKey?: string;
  apiKeyIndex?: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface Page {
  id: string;
  title?: string;
  heroPadding?: {
    top?:
      | 'none'
      | 'extraSmall'
      | 'small'
      | 'smallLarge'
      | 'mediumSmall'
      | 'mediumLarge'
      | 'largeSmall'
      | 'large'
      | 'extraLargeSmall'
      | 'extraLarge';
    bottom?:
      | 'none'
      | 'extraSmall'
      | 'small'
      | 'smallLarge'
      | 'mediumSmall'
      | 'mediumLarge'
      | 'largeSmall'
      | 'large'
      | 'extraLargeSmall'
      | 'extraLarge';
    left?:
      | 'none'
      | 'extraSmall'
      | 'small'
      | 'smallLarge'
      | 'mediumSmall'
      | 'mediumLarge'
      | 'largeSmall'
      | 'large'
      | 'extraLargeSmall'
      | 'extraLarge';
    right?:
      | 'none'
      | 'extraSmall'
      | 'small'
      | 'smallLarge'
      | 'mediumSmall'
      | 'mediumLarge'
      | 'largeSmall'
      | 'large'
      | 'extraLargeSmall'
      | 'extraLarge';
  };
  heroMaxWidth: 'small' | 'medium' | 'large' | 'extraLarge';
  heroBackground: {
    type?: 'clipped' | 'straight';
    fillType?: 'color' | 'image' | 'none';
    color: 'none' | 'darkSlate' | 'lightSlate' | 'white';
    image: string | Media;
    height?: 'full' | 'half' | 'fillSmall' | 'fillMedium' | 'fillLarge' | 'overflowSmall' | 'overflowLarge';
  };
  heroType: 'minimal' | 'contentLeftOfMedia' | 'contentRightOfMedia' | 'contentAboveMedia';
  heroContent?: {
    [k: string]: unknown;
  }[];
  heroMediaType: 'video' | 'image';
  heroMedia: string | Media;
  heroVideoThumbnail?: string | Media;
  heroCallToAction: {
    link: {
      type?: 'page' | 'external' | 'multiple';
      label: string;
      page: string;
      url: string;
      sublinks: {
        type?: 'page' | 'external';
        label?: string;
        url: string;
        page: string;
        id?: string;
      }[];
    };
    size: 'small' | 'medium' | 'large';
    appendArrow?: boolean;
    id?: string;
  }[];
  heroMediaDecoration?: boolean;
  layout: {
    layoutBlocks: (
      | {
          form: string | Form;
          id?: string;
          blockName?: string;
          blockType: 'form-block';
        }
      | {
          media: string | Media;
          mediaMaxWidth: 'small' | 'medium' | 'large' | 'extraLarge';
          mediaPadding?: {
            top?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            bottom?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            left?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            right?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
          };
          id?: string;
          blockName?: string;
          blockType: 'media-block';
        }
      | {
          content: {
            [k: string]: unknown;
          }[];
          decoration?: boolean;
          width: 'oneQuarter' | 'half' | 'threeQuarter' | 'full';
          contentPlacement?: 'left' | 'center' | 'right';
          textAlignment: 'left' | 'center' | 'right';
          textSize?: 'small' | 'medium' | 'large';
          textContentMaxWidth: 'small' | 'medium' | 'large' | 'extraLarge';
          textContentPadding?: {
            top?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            bottom?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            left?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            right?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
          };
          id?: string;
          blockName?: string;
          blockType: 'text-content';
        }
      | {
          divideStyle?: 'horizontal' | 'vertical';
          showOnlyOnLargeScreens?: boolean;
          id?: string;
          blockName?: string;
          blockType: 'divide';
        }
      | {
          spacing?: {
            horizontal?: {
              large?:
                | 'none'
                | 'extraSmall'
                | 'small'
                | 'smallLarge'
                | 'mediumSmall'
                | 'mediumLarge'
                | 'largeSmall'
                | 'large'
                | 'extraLargeSmall'
                | 'extraLarge';
              small?:
                | 'none'
                | 'extraSmall'
                | 'small'
                | 'smallLarge'
                | 'mediumSmall'
                | 'mediumLarge'
                | 'largeSmall'
                | 'large'
                | 'extraLargeSmall'
                | 'extraLarge';
            };
            vertical?: {
              large?:
                | 'none'
                | 'extraSmall'
                | 'small'
                | 'smallLarge'
                | 'mediumSmall'
                | 'mediumLarge'
                | 'largeSmall'
                | 'large'
                | 'extraLargeSmall'
                | 'extraLarge';
              small?:
                | 'none'
                | 'extraSmall'
                | 'small'
                | 'smallLarge'
                | 'mediumSmall'
                | 'mediumLarge'
                | 'largeSmall'
                | 'large'
                | 'extraLargeSmall'
                | 'extraLarge';
            };
          };
          id?: string;
          blockName?: string;
          blockType: 'spacing';
        }
      | {
          callToAction: {
            link: {
              type?: 'page' | 'external' | 'multiple';
              label: string;
              page: string;
              url: string;
              sublinks: {
                type?: 'page' | 'external';
                label?: string;
                url: string;
                page: string;
                id?: string;
              }[];
            };
            size: 'small' | 'medium' | 'large';
            appendArrow?: boolean;
            id?: string;
          }[];
          callToActionPadding?: {
            top?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            bottom?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            left?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            right?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
          };
          id?: string;
          blockName?: string;
          blockType: 'call-to-action';
        }
      | {
          contents: {
            image?: string | Media;
            heading: string;
            content: {
              [k: string]: unknown;
            }[];
            id?: string;
          }[];
          contentGridTextSize?: 'small' | 'medium' | 'large';
          contentAlignment?: 'left' | 'center';
          lineDecoration?: boolean;
          contentGridPadding?: {
            top?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            bottom?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            left?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            right?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
          };
          id?: string;
          blockName?: string;
          blockType: 'content-grid';
        }
      | {
          displayStyle?: 'detailed' | 'simplified';
          leadText?: {
            [k: string]: unknown;
          }[];
          tabs: {
            controlText: {
              [k: string]: unknown;
            }[];
            controlIcon?: string | Media;
            tabImage: string | Media;
            id?: string;
          }[];
          imageTabsPadding?: {
            top?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            bottom?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            left?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            right?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
          };
          id?: string;
          blockName?: string;
          blockType: 'image-tabs';
        }
      | {
          images: {
            image: string | Media;
            id?: string;
          }[];
          fadeSides?: boolean;
          imageGridPadding?: {
            top?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            bottom?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            left?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            right?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
          };
          id?: string;
          blockName?: string;
          blockType: 'image-grid';
        }
      | {
          layout?: 'row' | 'column';
          shadowType?: 'small' | 'medium' | 'large';
          textContent?: {
            [k: string]: unknown;
          }[];
          bannerCallToAction: {
            link: {
              type?: 'page' | 'external' | 'multiple';
              label: string;
              page: string;
              url: string;
              sublinks: {
                type?: 'page' | 'external';
                label?: string;
                url: string;
                page: string;
                id?: string;
              }[];
            };
            size: 'small' | 'medium' | 'large';
            appendArrow?: boolean;
            id?: string;
          }[];
          tag?: boolean;
          tagText?: string;
          tagPosition?: 'left' | 'right';
          bannerPadding?: {
            top?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            bottom?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            left?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            right?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
          };
          id?: string;
          blockName?: string;
          blockType: 'banner';
        }
      | {
          features: string[] | Feature[];
          featuresListPadding?: {
            top?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            bottom?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            left?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            right?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
          };
          id?: string;
          blockName?: string;
          blockType: 'features-list';
        }
      | {
          statsListDisplayStyle?: 'detailed' | 'simplified';
          stats: {
            name: string;
            value: string;
            id?: string;
          }[];
          showcaseImage?: string | Media;
          statsListPadding?: {
            top?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            bottom?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            left?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            right?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
          };
          id?: string;
          blockName?: string;
          blockType: 'stats-list';
        }
      | {
          pricingPlans: string[] | PricingPlan[];
          pricingTablesDisplayStyle?: 'detailed' | 'simplified';
          detailedFeatures: {
            featureName: string;
            tag?: string;
            planSpecs: {
              pricingPlan: string | PricingPlan;
              featureSpecs?: {
                includesFeature?: boolean;
                specDetails?: string;
              };
              id?: string;
            }[];
            id?: string;
          }[];
          priceDifference?: number;
          pricingTablesPadding?: {
            top?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            bottom?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            left?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            right?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
          };
          id?: string;
          blockName?: string;
          blockType: 'pricing-tables';
        }
      | {
          employees: string[] | Employee[];
          employeesListPadding?: {
            top?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            bottom?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            left?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            right?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
          };
          id?: string;
          blockName?: string;
          blockType: 'employees-list';
        }
      | {
          customers: string[] | Customer[];
          customersListDisplayStyle?: 'grid' | 'flex';
          customersListPadding?: {
            top?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            bottom?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            left?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            right?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
          };
          id?: string;
          blockName?: string;
          blockType: 'customers-list';
        }
      | {
          faqs: string[] | Faq[];
          faqsListPadding?: {
            top?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            bottom?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            left?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            right?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
          };
          id?: string;
          blockName?: string;
          blockType: 'faqs-list';
        }
      | {
          testimonials: string[] | Testimonial[];
          testimonialsListDisplayStyle?: 'detailed' | 'simplified';
          testimonialsListPadding?: {
            top?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            bottom?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            left?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
            right?:
              | 'none'
              | 'extraSmall'
              | 'small'
              | 'smallLarge'
              | 'mediumSmall'
              | 'mediumLarge'
              | 'largeSmall'
              | 'large'
              | 'extraLargeSmall'
              | 'extraLarge';
          };
          id?: string;
          blockName?: string;
          blockType: 'testimonials-list';
        }
    )[];
    layout: 'row' | 'column';
    contentMaxWidth: 'small' | 'medium' | 'large' | 'extraLarge';
    basePadding?: boolean;
    contentBackground: {
      type?: 'clipped' | 'straight';
      fillType?: 'color' | 'image' | 'none';
      color: 'none' | 'darkSlate' | 'lightSlate' | 'white';
      image: string | Media;
      height?: 'full' | 'half' | 'fillSmall' | 'fillMedium' | 'fillLarge' | 'overflowSmall' | 'overflowLarge';
    };
    contentPadding?: {
      top?:
        | 'none'
        | 'extraSmall'
        | 'small'
        | 'smallLarge'
        | 'mediumSmall'
        | 'mediumLarge'
        | 'largeSmall'
        | 'large'
        | 'extraLargeSmall'
        | 'extraLarge';
      bottom?:
        | 'none'
        | 'extraSmall'
        | 'small'
        | 'smallLarge'
        | 'mediumSmall'
        | 'mediumLarge'
        | 'largeSmall'
        | 'large'
        | 'extraLargeSmall'
        | 'extraLarge';
      left?:
        | 'none'
        | 'extraSmall'
        | 'small'
        | 'smallLarge'
        | 'mediumSmall'
        | 'mediumLarge'
        | 'largeSmall'
        | 'large'
        | 'extraLargeSmall'
        | 'extraLarge';
      right?:
        | 'none'
        | 'extraSmall'
        | 'small'
        | 'smallLarge'
        | 'mediumSmall'
        | 'mediumLarge'
        | 'largeSmall'
        | 'large'
        | 'extraLargeSmall'
        | 'extraLarge';
    };
    retract?: boolean;
    id?: string;
    blockName?: string;
    blockType: 'content';
  }[];
  includeFooter: boolean;
  published?: boolean;
  slug?: string;
  meta?: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  updatedAt: string;
  createdAt: string;
}
export interface Form {
  id: string;
  title: string;
  fields?: (
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'text';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'textarea';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: string;
        options: {
          label: string;
          value: string;
          id?: string;
        }[];
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'select';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'email';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'state';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'country';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        defaultValue?: number;
        required?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'number';
      }
    | {
        name: string;
        label?: string;
        width?: number;
        required?: boolean;
        defaultValue?: boolean;
        id?: string;
        blockName?: string;
        blockType: 'checkbox';
      }
    | {
        message?: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'message';
      }
  )[];
  submitButtonLabel?: string;
  confirmationType?: 'message' | 'redirect';
  confirmationMessage: {
    [k: string]: unknown;
  }[];
  redirect?: {
    type?: 'reference' | 'custom';
    reference: {
      value: string | Page;
      relationTo: 'pages';
    };
    url: string;
  };
  emails: {
    emailTo?: string;
    cc?: string;
    bcc?: string;
    replyTo?: string;
    emailFrom?: string;
    subject: string;
    message?: {
      [k: string]: unknown;
    }[];
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Feature {
  id: string;
  title: string;
  description: string;
  image: string | Media;
  updatedAt: string;
  createdAt: string;
}
export interface PricingPlan {
  id: string;
  name: string;
  description: {
    [k: string]: unknown;
  }[];
  price: {
    monthly: number;
    yearly: number;
  };
  featuresListText?: string;
  callToAction: {
    link: {
      type?: 'page' | 'external' | 'multiple';
      label: string;
      page: string;
      url: string;
      sublinks: {
        type?: 'page' | 'external';
        label?: string;
        url: string;
        page: string;
        id?: string;
      }[];
    };
    size: 'small' | 'medium' | 'large';
    appendArrow?: boolean;
    id?: string;
  }[];
  tag?: string;
  coreFeatures: {
    feature?: string;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Employee {
  id: string;
  name: string;
  image: string | Media;
  role: string;
  updatedAt: string;
  createdAt: string;
}
export interface Customer {
  id: string;
  name: string;
  logo: string | Media;
  updatedAt: string;
  createdAt: string;
}
export interface Faq {
  id: string;
  question: string;
  answer: {
    [k: string]: unknown;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Testimonial {
  id: string;
  companyName: string;
  companyLogo?: string | Media;
  companyWebsite?: string;
  clientName: string;
  clientImage: string | Media;
  clientRole: string;
  testimonySummary?: string;
  testimony: {
    [k: string]: unknown;
  }[];
  mediaType?: 'none' | 'image' | 'video';
  media: string | Media;
  videoThumbnail: string | Media;
  updatedAt: string;
  createdAt: string;
}
export interface BlogPost {
  id: string;
  title: string;
  readTime: string;
  summary: string;
  image: string | Media;
  layout: (
    | {
        postContent: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'post-content';
      }
    | {
        postMedia: string | Media;
        caption?: string;
        id?: string;
        blockName?: string;
        blockType: 'post-media';
      }
    | {
        id?: string;
        blockName?: string;
        blockType: 'separator';
      }
  )[];
  status: 'draft' | 'published';
  publishedAt: string;
  author: string | User;
  categories: string[] | BlogCategory[];
  slug?: string;
  meta?: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  updatedAt: string;
  createdAt: string;
}
export interface BlogCategory {
  id: string;
  name: string;
  archived: boolean;
  updatedAt: string;
  createdAt: string;
}
export interface SupportArticle {
  id: string;
  title: string;
  readTime: string;
  summary: string;
  image: string | Media;
  layout: (
    | {
        postContent: {
          [k: string]: unknown;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'post-content';
      }
    | {
        postMedia: string | Media;
        caption?: string;
        id?: string;
        blockName?: string;
        blockType: 'post-media';
      }
    | {
        id?: string;
        blockName?: string;
        blockType: 'separator';
      }
  )[];
  status: 'draft' | 'published';
  publishedAt: string;
  author: string | User;
  categories: string[] | SupportCategory[];
  slug?: string;
  meta?: {
    title?: string;
    description?: string;
    image?: string | Media;
  };
  updatedAt: string;
  createdAt: string;
}
export interface SupportCategory {
  id: string;
  name: string;
  description: string;
  icon: string | Media;
  archived: boolean;
  updatedAt: string;
  createdAt: string;
}
export interface FormSubmission {
  id: string;
  form: string | Form;
  submissionData: {
    field: string;
    value: string;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Header {
  id: string;
  links: {
    link: {
      type?: 'page' | 'external' | 'multiple';
      label: string;
      page: string;
      url: string;
      sublinks: {
        type?: 'page' | 'external';
        label?: string;
        url: string;
        page: string;
        id?: string;
      }[];
    };
    id?: string;
  }[];
}
export interface Footer {
  id: string;
  text?: string;
  items: {
    title?: string;
    links: {
      link: {
        type?: 'page' | 'external' | 'multiple';
        label: string;
        page: string;
        url: string;
        sublinks: {
          type?: 'page' | 'external';
          label?: string;
          url: string;
          page: string;
          id?: string;
        }[];
      };
      id?: string;
    }[];
    id?: string;
  }[];
}
export interface SocialMedia {
  id: string;
  items?: {
    label?: 'twitter' | 'github' | 'facebook' | 'telegram';
    link?: string;
    id?: string;
  }[];
}
export interface Newsletter {
  id: string;
  form: string | Form;
}
