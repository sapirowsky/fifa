<template>
  <Suspense>
    <GroupTables />
    <template #fallback>
      <GroupTablesSus />
    </template>
  </Suspense>
</template>