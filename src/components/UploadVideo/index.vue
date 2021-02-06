<template>
  <div class="sc-AxiKw dZbDOR">
    <div class="modal-content">
      <form>
        <div class="modal-header">
          <div class="modal-header-left">
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              @click="handleClose"
            >
              <g>
                <path
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                ></path>
              </g>
            </svg>
            <h3>Upload Video</h3>
          </div>
          <div style="display: block">
            <button class="sc-AxirZ erzyjX">Save</button>
          </div>
        </div>
        <div class="tab video-form">
          <input required type="file" />
          <video controls></video>
          <input required type="text" placeholder="Enter the title" />
          <textarea
            required
            placeholder="Tell viewers about your video"
          ></textarea>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UploadVideo',
  setup (props, context) {
    const handleClose = () => {
      // 对外发布一个自定义事件
      context.emit('close')
    }
    return {
      handleClose
    }
  }
})
</script>
