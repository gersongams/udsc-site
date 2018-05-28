import CMS from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import BlogPagePreview from "./preview-templates/BlogPagePreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";
import WorkshopPagePreview from "./preview-templates/WorkshopPagePreview";
import ProjectPagePreview from "./preview-templates/ProjectPagePreview";
import HackathonPagePreview from "./preview-templates/HackathonPagePreview";
import MemberPagePreview from "./preview-templates/MemberPagePreview";

CMS.registerPreviewStyle("/styles.css");
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewTemplate("blogpage", BlogPagePreview);
CMS.registerPreviewTemplate("workshops", WorkshopPagePreview);
CMS.registerPreviewTemplate("projects", ProjectPagePreview);
CMS.registerPreviewTemplate("hackathon", HackathonPagePreview);
CMS.registerPreviewTemplate("members", MemberPagePreview);