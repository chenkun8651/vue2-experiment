<template>
  <div class="flex" ref="box">
    <!-- 上传 -->
    <div class="w-9/12">
      <!-- AntDesignVue -->
      <a-card id="1" class="my-5" title="AntDesignVue 上传">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="AntDesignVue.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启多选功能</span>
            <a-switch v-model="AntDesignVue.multiple" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否支持上传文件夹</span>
            <a-switch v-model="AntDesignVue.directory" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示上传列表</span>
            <a-switch v-model="AntDesignVue.showUploadList" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示文件上传对话框</span>
            <a-switch v-model="AntDesignVue.openFileDialogOnClick" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置上传类型</span>
            <el-select
              size="small"
              class="w-36"
              v-model="AntDesignVue.listType"
            >
              <el-option :value="'text'">text</el-option>
              <el-option :value="'picture'">picture</el-option>
              <el-option :value="'picture-card'">picture-card</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <a-upload
            class="avatar-uploader"
            :action="'https://www.mocky.io/v2/5cc8019d300000980a055e76'"
            :headers="{
              authorization: 'authorization-text',
            }"
            :disabled="AntDesignVue.disabled"
            :multiple="AntDesignVue.multiple"
            :directory="AntDesignVue.directory"
            :show-upload-list="AntDesignVue.showUploadList"
            :open-file-dialog-on-click="AntDesignVue.openFileDialogOnClick"
            :list-type="AntDesignVue.listType"
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
      <a-card id="2" class="my-5" title="ElementUI 上传">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="ElementUI.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启多选功能</span>
            <a-switch v-model="ElementUI.multiple" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否支持拖拽上传</span>
            <a-switch v-model="ElementUI.drag" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置上传类型</span>
            <el-select size="small" class="w-36" v-model="ElementUI.listType">
              <el-option :value="'text'">text</el-option>
              <el-option :value="'picture'">picture</el-option>
              <el-option :value="'picture-card'">picture-card</el-option>
            </el-select>
          </div>
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
            :action="'https://jsonplaceholder.typicode.com/posts/'"
            :disabled="ElementUI.disabled"
            :multiple="ElementUI.multiple"
            :drag="ElementUI.drag"
            :list-type="ElementUI.listType"
            :limit="ElementUI.limit"
          >
            <el-button>点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </div>
      </a-card>
      <!-- AtUI -->
      <a-card id="3" class="my-5" title="AtUI 上传">
        <div class="text-red-500">AtUI框架没有上传</div>
      </a-card>
      <!-- ViewUI -->
      <a-card id="4" class="my-5" title="ViewUI 上传">
        <div class="w-full flex flex-row flex-wrap justify-start items-center">
          <div class="my-2 mr-5">
            <span class="mr-2">是否禁用</span>
            <a-switch v-model="ViewUI.disabled" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否开启多选功能</span>
            <a-switch v-model="ViewUI.multiple" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否支持粘贴上传文件</span>
            <a-switch v-model="ViewUI.paste" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否支持上传文件夹</span>
            <a-switch v-model="ViewUI.webkitdirectory" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">是否显示上传列表</span>
            <a-switch v-model="ViewUI.showUploadList" />
          </div>
          <div class="my-2 mr-5">
            <span class="mr-2">设置上传类型</span>
            <el-select size="small" class="w-36" v-model="ViewUI.type">
              <el-option :value="'select'">select</el-option>
              <el-option :value="'drag'">drag</el-option>
            </el-select>
          </div>
        </div>
        <div>
          <Upload
            :action="'//jsonplaceholder.typicode.com/posts/'"
            :disabled="ViewUI.disabled"
            :multiple="ViewUI.multiple"
            :paste="ViewUI.paste"
            :webkitdirectory="ViewUI.webkitdirectory"
            :show-upload-list="ViewUI.showUploadList"
            :type="ViewUI.type"
          >
            <Button icon="ios-cloud-upload-outline">点击上传</Button>
          </Upload>
        </div>
      </a-card>
    </div>
    <BasicAnchor
      :parentList="this.AnchorInfo.uploadAnchor"
      :parentRefs="this.$refs"
    >
    </BasicAnchor>
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
        multiple: false,
        directory: false,
        showUploadList: false,
        openFileDialogOnClick: false,
        listType: "text",
        loading: false,
        imageUrl: "",
      },
      ElementUI: {
        disabled: false,
        multiple: false,
        drag: false,
        listType: "text",
        limit: 3,
      },
      ViewUI: {
        disabled: false,
        multiple: false,
        paste: false,
        webkitdirectory: false,
        showUploadList: false,
        type: "select",
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