<script setup lang="ts">
import CommonWrapper from "@theme-hope/components/CommonWrapper";
import NormalPage from "@theme-hope/components/NormalPage";
import SkipLink from "@theme-hope/components/SkipLink";
import { FadeSlideY } from "@theme-hope/components/transitions/index";
// 說明參考
// https://theme-hope.vuejs.press/zh/guide/customize/layout.html
// https://theme-hope.vuejs.press/zh/guide/advanced/replace.html
// 範例參考
// https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/docs/theme/src/.vuepress/layouts/SlotDemo.vue
</script>
<template>
  <SkipLink />
  <CommonWrapper>
    <FadeSlideY>
      <NormalPage>
        <template #contentAfter>
          <div class="theme-hope-content">
            <Share colorful services="email,facebook,line,linkedin,messenger,qrcode,reddit,telegram,twitter" />
          </div>
        </template>
      </NormalPage>
    </FadeSlideY>
  </CommonWrapper>
</template>
