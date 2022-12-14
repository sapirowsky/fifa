<script setup>
useHead({
  htmlAttrs: {
    lang: "pl",
  },
  meta: [
    {
      hid: "description",
      name: "description",
      content: "Na stronie znajdziesz informacje dotyczące mundialu",
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "./flag-icons.min.css",
    },
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
});
</script>
<template>
  <Head>
    <title>Fifa World Cup 2022</title>
  </Head>
  <Body
    class="bg-darky-white text-black dark:bg-lighty-black dark:text-darky-white"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>