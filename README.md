# Bug Report: Tailwind CSS Not Processed in Next.js v15.0.1 with Turbopack on Safari After Removing Google Fonts

## Description

When using Next.js version **15.0.1** with **Turbopack** for development, removing the Google Fonts in `layout.tsx` causes **Tailwind CSS** to stop processing styles. This issue is **exclusive to Safari and Safari Technology Preview** browsers. The problem does not occur when:

- Using Turbopack is disabled.
- Google Fonts are included.
- Accessing the application through other browsers like Chrome, Firefox, or Opera.

## Steps to Reproduce

1. **Initialize a New Next.js Project:**

   ```bash
   npx create-next-app@15.0.1 .
   ```

2. **Configure Project Settings:**
   Respond with **Yes** to all prompts except for customizing the import alias.
   - **TypeScript:** Yes
   - **ESLint:** Yes
   - **Tailwind CSS:** Yes
   - **`src/` Directory:** Yes
   - **App Router:** Yes
   - **Turbopack for Next Dev:** Yes
   - **Customize Import Alias:** No

3. **Start the Development Server:**

   ```bash
   npm run dev
   ```

4. **Modify `layout.tsx`:**
   - **Comment Out Google Fonts:**

     ```tsx:src/app/layout.tsx
     // const geistSans = localFont({
     //   src: "./fonts/GeistVF.woff",
     //   variable: "--font-geist-sans",
     //   weight: "100 900",
     // });
     // const geistMono = localFont({
     //   src: "./fonts/GeistMonoVF.woff",
     //   variable: "--font-geist-mono",
     //   weight: "100 900",
     // });
     ```

   - **Comment Out `className` in `body`:**

     ```tsx:src/app/layout.tsx
     <body
       // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
     >
       {children}
     </body>
     ```

5. **Access the Application in Safari or Safari Technology Preview:**
   Open `http://localhost:3000` in Safari.

6. **Observe the Issue:**
   Tailwind CSS styles are not applied to the application.

## Expected Behavior

Tailwind CSS should process and apply styles correctly, irrespective of the inclusion of Google Fonts, when using Turbopack for development. The styles should render properly in all supported browsers, including Safari.

## Actual Behavior

After removing Google Fonts and utilizing Turbopack in Next.js v15.0.1, Tailwind CSS fails to process styles **only** in Safari and Safari Technology Preview browsers. The issue does not manifest in other browsers or when Turbopack is disabled.

## Environment

- **Next.js Version:** 15.0.1
- **Node.js Version:** *[Please specify your Node.js version]*
- **Operating System:** *[Please specify your OS]*
- **Browser:** Safari, Safari Technology Preview
- **Other Browsers Tested:** Chrome, Firefox, Opera
- **Development Tool:** Turbopack for `next dev`

## Additional Information

### Current `layout.tsx` File
