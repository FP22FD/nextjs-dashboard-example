# Favicon Implementation Steps

Using React Icons website:

- https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#icon
- https://react-icons.github.io/react-icons/icons/pi/

1. Get SVG from React Icons
   Open React Icons website and find the desired icon: https://react-icons.github.io/react-icons/icons/pi/
   Open DevTools, inspect the icon, copy the <svg> code: copy outerHTML
   Open Notepad++ (or any text editor)
   Paste the copied <svg> code
   Save the Notepad++ page as .svg
   Put the favicon.svg inside the public folder of the Next.js project.

1. Convert SVG to ICO
   Go to RealFaviconGenerator or favicon.io converter: https://realfavicongenerator.net/
   Upload the favicon.svg
   Generate a .ico file (recommended size: 512x512)
   Download the resulting favicon.ico
   Add ICO to Project
   Place favicon.ico in the public folder alongside favicon.svg.

1. Verify
   Clear Browser Cache
   Cancel / clear cache to make sure the new favicon is loaded
   Verify the favicon is displaying correctly in the browser.

Note: see also manually method setting the favicon in Next.js and metadata: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons#icon

---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <path fill="#111111" d="M104,34H56A14,14,0,0,0,42,48V208a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V48A14,14,0,0,0,104,34ZM54,78h52V178H54Zm2-32h48a2,2,0,0,1,2,2V66H54V48A2,2,0,0,1,56,46Zm48,164H56a2,2,0,0,1-2-2V190h52v18A2,2,0,0,1,104,210Zm125.7-15L196.51,37.16a14,14,0,0,0-16.63-10.85L133.07,36.37A14.09,14.09,0,0,0,122.3,53l33.19,157.81a14,14,0,0,0,6.1,8.9,13.85,13.85,0,0,0,7.57,2.26,13.55,13.55,0,0,0,3-.32l46.81-10.05A14.09,14.09,0,0,0,229.7,195Zm-82.81-83.32,50.73-10.9,14.12,67.16L161,178.81Zm-6.63-31.56L191,69.19,195.15,89l-50.73,10.9Zm-4.66-32,46.8-10.05a2.18,2.18,0,0,1,.42,0,1.89,1.89,0,0,1,1.05.32,2,2,0,0,1,.89,1.31l3.75,17.82L137.79,68.34l-3.74-17.78A2.07,2.07,0,0,1,135.6,48.1Zm80.81,151.8L169.6,210a1.92,1.92,0,0,1-1.47-.27,2,2,0,0,1-.89-1.31l-3.75-17.82,50.72-10.9L218,197.43A2.07,2.07,0,0,1,216.41,199.9Z"/>
</svg>
