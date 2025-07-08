<script setup lang="ts">
import { ref } from 'vue'
import { Delete, Plus } from '@element-plus/icons-vue'
import { ElButton, ElIcon } from 'element-plus'
import { Attachments } from 'vue-aurora-x'

// 文件列表数据
const fileList = ref([
  {
    uid: '1',
    name: '项目文档.pdf',
    size: 1258291,
    type: 'application/pdf',
    description: 'PDF文档，包含项目说明',
    url: 'https://example.com/file1.pdf',
  },
  {
    uid: '2',
    name: '设计稿.png',
    size: 2458000,
    type: 'image/png',
    description: '首页设计稿',
    url: 'https://example.com/file2.png',
  },
  {
    uid: '3',
    name: '会议记录.docx',
    size: 35840,
    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    description: '2023年5月会议记录',
    url: 'https://example.com/file3.docx',
  },
])

// 是否启用全局拖拽
const enableBodyDrop = ref(false)

// 处理上传
function handleUpload() {
  // 模拟文件选择对话框
  const input = document.createElement('input')
  input.type = 'file'
  input.multiple = true
  input.onchange = (e) => {
    const files = (e.target as HTMLInputElement).files
    if (files) {
      handleNewFiles(Array.from(files))
    }
  }
  input.click()
}

// 处理拖放上传
function handleDrop(files: File[]) {
  handleNewFiles(files)
}

// 处理新文件
function handleNewFiles(files: File[]) {
  const newFiles = files.map((file) => ({
    uid:
      Date.now() + Math.random().toString(36).substring(2, 10),
    name: file.name,
    size: file.size,
    type: file.type,
    description: `上传于 ${new Date().toLocaleString()}`,
    url: URL.createObjectURL(file),
  }))

  fileList.value = [...fileList.value, ...newFiles]
}

// 处理删除
function handleDelete(item: any, index: number) {
  fileList.value.splice(index, 1)
}

// 清空文件
function clearFiles() {
  fileList.value = []
}

// 添加随机文件
function addRandomFile() {
  const fileTypes = [
    { ext: 'pdf', type: 'application/pdf', name: '报告' },
    { ext: 'jpg', type: 'image/jpeg', name: '照片' },
    {
      ext: 'docx',
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      name: '文档',
    },
    {
      ext: 'xlsx',
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      name: '表格',
    },
    { ext: 'zip', type: 'application/zip', name: '压缩包' },
  ]

  const randomType =
    fileTypes[Math.floor(Math.random() * fileTypes.length)]
  const randomSize = Math.floor(Math.random() * 10000000) + 1000
  const randomNumber = Math.floor(Math.random() * 100)

  fileList.value.push({
    uid:
      Date.now() + Math.random().toString(36).substring(2, 10),
    name: `${randomType.name}_${randomNumber}.${randomType.ext}`,
    size: randomSize,
    type: randomType.type,
    description: `随机生成的${randomType.name}文件`,
    url: `https://example.com/random_${Date.now()}.${randomType.ext}`,
  })
}

// 切换全局拖拽
function toggleBodyDrop() {
  enableBodyDrop.value = !enableBodyDrop.value
}

// 格式化文件大小
function formatFileSize(bytes: number) {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${(bytes / k ** i).toFixed(2)} ${sizes[i]}`
}
</script>

<template>
  <div class="attachments-demo">
    <h2>Attachments 附件组件演示</h2>

    <!-- 基础用法 -->
    <div class="demo-section">
      <h3>基础用法 - 水平滚动模式</h3>
      <Attachments
        :items="fileList"
        @upload-change="handleUpload"
        @upload-drop="handleDrop"
        @delete-file="handleDelete"
      />
    </div>

    <!-- 垂直滚动模式 -->
    <div class="demo-section">
      <h3>垂直滚动模式</h3>
      <Attachments
        :items="fileList"
        overflow="scrollY"
        :list-style="{ height: '300px', width: '500px' }"
        @upload-change="handleUpload"
        @upload-drop="handleDrop"
        @delete-file="handleDelete"
      />
    </div>

    <!-- 自动换行模式 -->
    <div class="demo-section">
      <h3>自动换行模式</h3>
      <Attachments
        :items="fileList"
        overflow="wrap"
        :list-style="{ maxWidth: '800px' }"
        @upload-change="handleUpload"
        @upload-drop="handleDrop"
        @delete-file="handleDelete"
      />
    </div>

    <!-- 文件数量限制 -->
    <div class="demo-section">
      <h3>文件数量限制 (最多3个文件)</h3>
      <Attachments
        :items="fileList"
        :limit="3"
        @upload-change="handleUpload"
        @upload-drop="handleDrop"
        @delete-file="handleDelete"
      />
    </div>

    <!-- 隐藏上传按钮 -->
    <div class="demo-section">
      <h3>隐藏上传按钮</h3>
      <Attachments
        :items="fileList"
        :hide-upload="true"
        @delete-file="handleDelete"
      />
    </div>

    <!-- 自定义拖拽目标 -->
    <div class="demo-section">
      <h3>自定义拖拽目标</h3>
      <div id="custom-drop-target" class="custom-drop-area">
        <p>这是一个自定义拖拽区域，可以将文件拖放到这里</p>
      </div>
      <Attachments
        :items="fileList"
        drag-target="custom-drop-target"
        @upload-change="handleUpload"
        @upload-drop="handleDrop"
        @delete-file="handleDelete"
      />
    </div>

    <!-- 自定义插槽 -->
    <div class="demo-section">
      <h3>自定义插槽</h3>
      <Attachments
        :items="fileList"
        @upload-change="handleUpload"
        @upload-drop="handleDrop"
        @delete-file="handleDelete"
      >
        <!-- 自定义空状态上传按钮 -->
        <template #empty-upload>
          <div class="custom-upload-btn">
            <ElIcon class="custom-icon">
              <Plus />
            </ElIcon>
            <span>点击这里添加文件</span>
          </div>
        </template>

        <!-- 自定义文件列表 -->
        <template #file-list="{ items }">
          <div
            v-for="(item, index) in items"
            :key="item.uid"
            class="custom-file-item"
          >
            <div class="custom-file-card">
              <img
                v-if="item.type?.includes('image')"
                :src="item.url"
                class="file-preview"
              />
              <div v-else class="file-icon">
                {{ item.name.slice(-3) }}
              </div>
              <div class="file-info">
                <h4>{{ item.name }}</h4>
                <p>{{ formatFileSize(item.size) }}</p>
              </div>
              <ElButton
                type="danger"
                circle
                @click="handleDelete(item, index)"
              >
                <ElIcon>
                  <Delete />
                </ElIcon>
              </ElButton>
            </div>
          </div>
        </template>

        <!-- 自定义追加上传按钮 -->
        <template #append-upload>
          <div class="custom-append-btn" @click="handleUpload">
            <span>添加更多</span>
          </div>
        </template>
      </Attachments>
    </div>

    <!-- 控制面板 -->
    <div class="demo-controls">
      <h3>控制面板</h3>
      <ElButton @click="clearFiles">清空文件</ElButton>
      <ElButton @click="addRandomFile">添加随机文件</ElButton>
      <ElButton @click="toggleBodyDrop"
        >{{ enableBodyDrop ? '禁用' : '启用' }}全局拖拽</ElButton
      >
    </div>

    <!-- 全局拖拽目标 -->
    <Attachments
      v-if="enableBodyDrop"
      :items="fileList"
      drag-target="body"
      @upload-drop="handleDrop"
      @delete-file="handleDelete"
    />
  </div>
</template>

<style scoped>
.attachments-demo {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  margin-bottom: 30px;
  color: #333;
  text-align: center;
}

.demo-section {
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
}

h3 {
  margin-bottom: 15px;
  color: #555;
  font-size: 18px;
}

.custom-drop-area {
  padding: 30px;
  margin-bottom: 20px;
  border: 2px dashed #ccc;
  border-radius: 8px;
  text-align: center;
  background-color: #f9f9f9;
  transition: all 0.3s;
}

.custom-drop-area:hover {
  border-color: #409eff;
  background-color: #ecf5ff;
}

.custom-upload-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border: 2px dashed #409eff;
  border-radius: 8px;
  cursor: pointer;
  background-color: #f0f9ff;
  transition: all 0.3s;
}

.custom-upload-btn:hover {
  background-color: #ecf5ff;
}

.custom-icon {
  font-size: 36px;
  margin-bottom: 10px;
  color: #409eff;
}

.custom-file-item {
  margin: 10px;
  width: 220px;
}

.custom-file-card {
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
  position: relative;
}

.file-preview {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
}

.file-icon {
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f7fa;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 24px;
  color: #909399;
  text-transform: uppercase;
}

.file-info {
  margin-bottom: 10px;
}

.file-info h4 {
  margin: 0 0 5px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.file-info p {
  margin: 0;
  font-size: 12px;
  color: #909399;
}

.custom-append-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border: 2px dashed #dcdfe6;
  border-radius: 8px;
  cursor: pointer;
  color: #909399;
  transition: all 0.3s;
}

.custom-append-btn:hover {
  border-color: #409eff;
  color: #409eff;
}

.demo-controls {
  margin-top: 40px;
  padding: 20px;
  background-color: #f5f7fa;
  border-radius: 8px;
  text-align: center;
}

.demo-controls .el-button {
  margin: 0 10px;
}
</style>
