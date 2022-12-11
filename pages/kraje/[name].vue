<script setup></script>
<template>
  <div class="w-full flex justify-center">
    <Suspense>
      <CountryMatchHistory :name="$route.params.name" />
    </Suspense>
  </div>
</template>