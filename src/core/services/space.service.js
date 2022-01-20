import {
  navSections,
  baselineLinks,
  socialLinks,
  legalText,
  brandLink,
  brandLogo
} from "../__mocks__/mockData";

export class SpaceService {
  getNavSections() {
    return Promise.resolve(navSections);
  }

  getBaselineLinks() {
    return Promise.resolve(baselineLinks);
  }

  getSocialLinks() {
    return Promise.resolve(socialLinks);
  }

  getLegalText() {
    return Promise.resolve(legalText);
  }

  getBrandLink() {
    return Promise.resolve(brandLink);
  }

  getBrandLogo() {
    return Promise.resolve(brandLogo);
  }
}

export const spaceService = new SpaceService();
