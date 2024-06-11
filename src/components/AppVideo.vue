<script>
  export default {
    name: "AppVideo",
    data() {
      return {
        isActive: false,
      };
    },
    methods: {
      toggleVideo() {
        this.isActive = !this.isActive;
      },
      hideVideo(event) {
        if (!event.target.closest(".videoContainer")) {
          this.isActive = false;
        }
      },
    },
  };
</script>
<template>
  <div class="content" @click="hideVideo">
    <div class="playButton" @click.stop="toggleVideo">
      <i v-if="!isActive" class="fas fa-play"></i>
    </div>

    <transition name="fade">
      <div v-if="isActive" class="videoContainer">
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/92850484?h=92cf136c98"
          width="840"
          height="560"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </transition>
  </div>
</template>
<style lang="scss" scoped>
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("/img/jumboImage.jpg");
    height: 90vh;
    position: relative;
  }

  .playButton {
    i {
      font-size: 50px;
      color: white;
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        transition: all 0.3s ease;
        transform: scale(1.3);
      }
    }
  }

  .videoContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
