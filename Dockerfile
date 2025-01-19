FROM mcr.microsoft.com/playwright:v1.49.1

WORKDIR /playwright_project-2/

COPY config/ /playwright_project-2/config/
COPY images/ /playwright_project-2/images/
COPY pages/ /playwright_project-2/pages/
COPY tests/ /playwright_project-2/tests/
COPY utils/ /playwright_project-2/utils/
COPY package.json /playwright_project-2/
COPY playwright.config.js /playwright_project-2/

RUN npx playwright install
RUN npm install

CMD ["npx", "playwright", "test"]
