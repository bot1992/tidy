import { MEDIA_FIELDS } from "../collections/media"
import { BACKGROUND_FIELDS } from "../fields/background"
import { CALL_TO_ACTION_FIELDS } from "../fields/call-to-action"
import { PADDING_FIELDS } from "../fields/padding"

const CONTENT_GRID_BLOCK = `
...on ContentGrid {
    id
    blockType
    contents {
        id
        heading
        content
        image ${MEDIA_FIELDS}
    }
    contentAlignment
    contentGridTextSize
    contentGridPadding ${PADDING_FIELDS}
}`

const MEDIA_BLOCK = `
...on MediaBlock {
    id
    blockType
    media ${MEDIA_FIELDS}
    mediaMaxWidth
    mediaPadding ${PADDING_FIELDS}
}`

const TEXT_CONTENT_BLOCK = `
...on TextContent {
    id
    blockType
    content
    contentPlacement
    textAlignment
    width
    decoration
    textSize
    textContentMaxWidth
    textContentPadding ${PADDING_FIELDS}
}`

const IMAGE_GRID_BLOCK = `
...on ImageGrid {
    id
    blockType
    images {
        id
        image ${MEDIA_FIELDS}
    }
    imageGridPadding ${PADDING_FIELDS}
}`

export const TAB_IMAGES_BLOCK = `
...on ImageTabs {
    id
    blockType
    displayStyle
    leadText
    tabs {
        id
        tabImage ${MEDIA_FIELDS}
        controlText
        controlIcon ${MEDIA_FIELDS}
    }
    imageTabsPadding ${PADDING_FIELDS}
}`

export const DIVIDE_BLOCK = `
...on Divide {
    id
    blockType
    divideStyle
    showOnlyOnLargeScreens
}`

export const FEATURES_LIST_BLOCK = `
...on FeaturesList {
    id
    blockType
    features {
        id
        title
        description
        image ${MEDIA_FIELDS}
    }
    featuresListPadding ${PADDING_FIELDS}
}`

export const STATS_LIST = `
...on StatsList {
    id
    blockType
    stats {
        id
        name
        value
    }
    statsListDisplayStyle
    showcaseImage ${MEDIA_FIELDS}
    statsListPadding ${PADDING_FIELDS}
}`

const PRICING_TABLE_FEATURE_FIELD = `{
    value
    label
    tag
}`

export const PRICING_TABLES_BLOCK = `
...on PricingTables {
    id
    blockType
    pricingPlans {
        id
        name
        description
        price {
            monthly
            yearly
        }
        callToAction ${CALL_TO_ACTION_FIELDS}
        mostPopular
        featuresListText
        coreFeatures {
            id
            feature
        }
    }
    detailedFeatures {
        featureName
        tag
        planSpecs {
            id
            pricingPlan {
                id
                name
            }
            featureSpecs {
                includesFeature
                specDetails
            }
        }
    }
    priceDifference
    pricingTablesDisplayStyle
    pricingTablesPadding ${PADDING_FIELDS}
}`

export const CALL_TO_ACTION_BLOCK = `
...on CallToAction {
    id
    blockType
    callToAction ${CALL_TO_ACTION_FIELDS}
    callToActionPadding ${PADDING_FIELDS}
}`

const EMPLOYEES_LIST_BLOCK = `
...on EmployeesList {
    id
    blockType
    employees {
        id
        image ${MEDIA_FIELDS}
        name
        role
    }
    employeesListPadding ${PADDING_FIELDS}
}`

const CUSTOMERS_LIST_BLOCK = `
...on CustomersList {
    id
    blockType
    customers {
        id
        name
        logo ${MEDIA_FIELDS}
    }
    customersListPadding ${PADDING_FIELDS}
}`

const BANNER_BLOCK = `
...on Banner {
    id
    blockType
    layout
    shadowType
    textContent
    bannerCallToAction ${CALL_TO_ACTION_FIELDS}
    tag
    tagText
    tagPosition
    bannerPadding ${PADDING_FIELDS}
}`

const FAQS_LIST_BLOCK = `
...on FaqsList {
    id
    blockType
    faqs {
        id
        question
        answer
    }
    faqsListPadding ${PADDING_FIELDS}
}`

const TESTIMONIALS_LIST_BLOCK = `
...on TestimonialsList {
    id
    blockType
    testimonials {
        id
        clientName
        companyName
        companyWebsite
        companyLogo ${MEDIA_FIELDS}
        clientImage ${MEDIA_FIELDS}
        clientRole
        testimonySummary
        testimony
        mediaType
        media ${MEDIA_FIELDS}
        videoThumbnail ${MEDIA_FIELDS}
    }
    testimonialsListDisplayStyle
    testimonialsListPadding ${PADDING_FIELDS}
}`

export const CONTENT_BLOCK = `
...on Content {
    id
    layoutBlocks {
        ${DIVIDE_BLOCK}
        ${MEDIA_BLOCK}
        ${CONTENT_GRID_BLOCK}
        ${TEXT_CONTENT_BLOCK}
        ${TAB_IMAGES_BLOCK}
        ${FEATURES_LIST_BLOCK}
        ${STATS_LIST}
        ${PRICING_TABLES_BLOCK}
        ${CALL_TO_ACTION_BLOCK}
        ${IMAGE_GRID_BLOCK}
        ${EMPLOYEES_LIST_BLOCK}
        ${CUSTOMERS_LIST_BLOCK}
        ${BANNER_BLOCK}
        ${FAQS_LIST_BLOCK}
        ${TESTIMONIALS_LIST_BLOCK}
    }
    layout
    basePadding
    retract
    contentBackground ${BACKGROUND_FIELDS}
    contentPadding ${PADDING_FIELDS}
}`
