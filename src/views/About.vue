<template>
  <div class="about">
    <ScreenOverlay :content='copyrightMessage'/>
  </div>
</template>

<script>

import ScreenOverlay from "@/components/ScreenOverlay.vue";

export default {
    name: "About",
    components: {
        ScreenOverlay
    },
    data: function() {
        return {
            copyrightMessage: '©2020 Matthew Farmer'
        }
    }
}

</script>