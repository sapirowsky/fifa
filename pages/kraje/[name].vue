<script setup></script>
<template>
  <div class="w-full flex flex-col items-center">
    <Suspense>
      <CountryMatchHistory :name="$route.params.name" />
      <template #fallback>
        <CountryMatchHistorySus />
      </template>
    </Suspense>
  </div>
</template>