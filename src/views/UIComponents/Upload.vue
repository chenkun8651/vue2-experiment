<template>
  <!-- 上传 -->
  <div>
    <!-- AntDesignVue -->
    <a-card class="my-5" title="AntDesignVue 上传">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="AntDesignVue.disabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AntDesignVue.listType">
          <a-radio-button :value="'text'">text</a-radio-button>
          <a-radio-button :value="'picture'">picture</a-radio-button>
          <a-radio-button :value="'picture-card'">
            picture-card
          </a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AntDesignVue.multiple">
          <a-radio-button :value="true">开启多选</a-radio-button>
          <a-radio-button :value="false">关闭多选</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AntDesignVue.directory">
          <a-radio-button :value="true">支持上传文件文件夹</a-radio-button>
          <a-radio-button :value="false">不支持上传文件文件夹</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AntDesignVue.showUploadList">
          <a-radio-button :value="true">显示上传列表</a-radio-button>
          <a-radio-button :value="false">不显示上传列表</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="AntDesignVue.openFileDialogOnClick">
          <a-radio-button :value="true">显示文件上传对话框</a-radio-button>
          <a-radio-button :value="false">不显示文件上传对话框</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <a-upload
          class="avatar-uploader"
          :disabled="AntDesignVue.disabled"
          :list-type="AntDesignVue.listType"
          :multiple="AntDesignVue.multiple"
          :directory="AntDesignVue.directory"
          :show-upload-list="AntDesignVue.showUploadList"
          :open-file-dialog-on-click="AntDesignVue.openFileDialogOnClick"
          :action="'https://www.mocky.io/v2/5cc8019d300000980a055e76'"
          :headers="{
            authorization: 'authorization-text',
          }"
          :before-upload="beforeUploadImage"
          @change="uploadChangeImage"
        >
          <img v-if="AntDesignVue.imageUrl" :src="AntDesignVue.imageUrl" />
          <a-button v-else>
            <a-icon :type="AntDesignVue.loading ? 'loading' : 'upload'" />
            点击上传
          </a-button>
        </a-upload>
      </div>
    </a-card>
    <!-- ElementUI -->
    <a-card class="my-5" title="ElementUI 上传">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="ElementUI.disabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ElementUI.listType">
          <a-radio-button :value="'text'">text</a-radio-button>
          <a-radio-button :value="'picture'">picture</a-radio-button>
          <a-radio-button :value="'picture-card'">
            picture-card
          </a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ElementUI.drag">
          <a-radio-button :value="true">支持拖拽上传</a-radio-button>
          <a-radio-button :value="false">不支持拖拽上传</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ElementUI.multiple">
          <a-radio-button :value="true">开启多选</a-radio-button>
          <a-radio-button :value="false">关闭多选</a-radio-button>
        </a-radio-group>
        <div class="my-2 mr-5">
          <span class="mr-2">设置上传限制数量</span>
          <a-input-number
            class="w-24"
            v-model="ElementUI.limit"
            :max="10"
            :min="0"
          />
        </div>
      </div>
      <div>
        <el-upload
          class="upload-demo"
          :disabled="ElementUI.disabled"
          :list-type="ElementUI.listType"
          :drag="ElementUI.drag"
          :multiple="ElementUI.multiple"
          :limit="ElementUI.limit"
          :action="'https://jsonplaceholder.typicode.com/posts/'"
        >
          <el-button>点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </div>
    </a-card>
    <!-- AtUI -->
    <a-card class="my-5" title="AtUI 上传">
      <div class="text-red-500">AtUI框架没有上传</div>
    </a-card>
    <!-- ViewUI -->
    <a-card class="my-5" title="ViewUI 上传">
      <div class="w-full flex flex-row flex-wrap justify-start items-center">
        <a-radio-group v-model="ViewUI.disabled">
          <a-radio-button :value="true">禁用</a-radio-button>
          <a-radio-button :value="false">启用</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ViewUI.type">
          <a-radio-button :value="'select'">select</a-radio-button>
          <a-radio-button :value="'drag'">drag</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ViewUI.multiple">
          <a-radio-button :value="true">开启多选</a-radio-button>
          <a-radio-button :value="false">关闭多选</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ViewUI.paste">
          <a-radio-button :value="true">支持粘贴上传文件</a-radio-button>
          <a-radio-button :value="false">不支持粘贴上传文件</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ViewUI.webkitdirectory">
          <a-radio-button :value="true">支持上传文件文件夹</a-radio-button>
          <a-radio-button :value="false">不支持上传文件文件夹</a-radio-button>
        </a-radio-group>
        <a-radio-group v-model="ViewUI.showUploadList">
          <a-radio-button :value="true">显示上传列表</a-radio-button>
          <a-radio-button :value="false">不显示上传列表</a-radio-button>
        </a-radio-group>
      </div>
      <div>
        <Upload
          :disabled="ViewUI.disabled"
          :type="ViewUI.type"
          :paste="ViewUI.paste"
          :multiple="ViewUI.multiple"
          :show-upload-list="ViewUI.showUploadList"
          :webkitdirectory="ViewUI.webkitdirectory"
          :action="'//jsonplaceholder.typicode.com/posts/'"
        >
          <Button icon="ios-cloud-upload-outline">点击上传</Button>
        </Upload>
      </div>
    </a-card>
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
      AntDesignVue: {
        disabled: false,
        listType: "text",
        multiple: false,
        directory: false,
        showUploadList: false,
        openFileDialogOnClick: true,
        loading: false,
        imageUrl: "",
      },
      ElementUI: {
        disabled: false,
        listType: "text",
        drag: false,
        multiple: false,
        limit: 3,
      },
      ViewUI: {
        disabled: false,
        type: "select",
        multiple: false,
        paste: false,
        webkitdirectory: true,
        showUploadList: false,
      },
    };
  },
  methods: {
    beforeUploadImage(file) {
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
        this.AntDesignVue.loading = true;
        return;
      }
      if (info.file.status === "done") {
        getBase64(info.file.originFileObj, (imageUrl) => {
          this.AntDesignVue.imageUrl = imageUrl;
          this.AntDesignVue.loading = false;
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