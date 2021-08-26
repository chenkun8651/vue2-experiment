<template>
  <!-- 上传 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="card-margin" title="AntDesignVue 上传">
      <div class="radio-box">
        <a-radio-group v-model="uploadDisabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="uploadListType">
          <a-radio-button :value="'text'">文本模式</a-radio-button>
          <a-radio-button :value="'picture'">图片模式</a-radio-button>
          <a-radio-button :value="'picture-card'">
            图片卡片模式
          </a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="uploadMultiple">
          <a-radio-button :value="true">开启多选</a-radio-button>
          <a-radio-button :value="false">关闭多选</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="uploadDirectory">
          <a-radio-button :value="true">支持上传文件文件夹</a-radio-button>
          <a-radio-button :value="false"> 不支持上传文件文件夹 </a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="uploadShowUploadList">
          <a-radio-button :value="true">显示上传列表</a-radio-button>
          <a-radio-button :value="false">不显示上传列表</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="uploadOpenFileDialogOnClick">
          <a-radio-button :value="true">显示文件上传对话框</a-radio-button>
          <a-radio-button :value="false"> 不显示文件上传对话框 </a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <a-upload
          class="avatar-uploader"
          name="avatar"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :headers="{
            authorization: 'authorization-text',
          }"
          :disabled="uploadDisabled"
          :list-type="uploadListType"
          :multiple="uploadMultiple"
          :directory="uploadDirectory"
          :show-upload-list="uploadShowUploadList"
          :open-file-dialog-on-click="uploadOpenFileDialogOnClick"
          :before-upload="uploadBeforeUploadImage"
          @change="uploadChangeImage"
        >
          <img v-if="uploadImageUrl" :src="uploadImageUrl" />
          <a-button v-else>
            <a-icon :type="uploadLoading ? 'loading' : 'upload'" />点击上传
          </a-button>
        </a-upload>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="card-margin" title="ElementUI 上传"></a-card>
    <!-- AtUI -->
    <a-card class="card-margin" title="AtUI 上传"></a-card>
    <!-- ViewUI -->
    <a-card class="card-margin" title="ViewUI 上传"></a-card>
  </div>
</template>

<script>
const getBase64 = function (img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
export default {
  data() {
    return {
      // AntDesignVue
      uploadDisabled: false,
      uploadListType: "text",
      uploadMultiple: false,
      uploadDirectory: false,
      uploadShowUploadList: false,
      uploadOpenFileDialogOnClick: true,
      uploadLoading: false,
      uploadImageUrl: "",
      // ElementUI
      // AtUI
      // ViewUI
    };
  },
  methods: {
    uploadBeforeUploadImage(file) {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        this.$message.error("只能上传JPG，PNG类型的图片!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("图片内容不能超过2MB!");
      }
      return isJpgOrPng && isLt2M;
    },
    uploadChangeImage(info) {
      if (info.file.status === "uploading") {
        this.uploadLoading = true;
        return;
      }
      if (info.file.status === "done") {
        getBase64(info.file.originFileObj, (imageUrl) => {
          this.uploadImageUrl = imageUrl;
          this.uploadLoading = false;
        });
      }
    },
  },
};
</script>

<style scoped>
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 26px;
  color: #999;
}
.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>