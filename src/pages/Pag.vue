<template>
  <div>
    <el-button type="danger">危险按钮</el-button>

    <el-table border style="width: 100%">
      <el-table-column type="index" label="姓名" width="width">
      </el-table-column>
      <el-table-column prop="prop" label="年龄" width="width">
      </el-table-column>
      <el-table-column prop="prop" label="电话" width="width">
        <template slot-scope="{ row }">
          <el-button
            type="success"
            icon="el-icon-plus"
            size="mini"
            title="添加sku"
            @click="addSku(row)"
          ></el-button>
        </template>
      </el-table-column>
      <el-table-column prop="prop" label="住址" width="width">
      </el-table-column>
    </el-table>

    <!-- 
        current-page: 当前在第几页. 
        page-size: 代表一页展示多少条数据.
        page-sizes: 每页显示个数选择器的选项设置.
        pager-count: 下面的页面按钮显示几个.
        layout: 可以实现分页器布局(->:后面的在最右侧), 
        jumper: Go to;   siezs: 3/page
        total: Total 99 
        @current-change: 当前页改变时会触发(page).(两种写法,如下)
        @size-change: 每页条数发生变化时触发(limit).(两种写法,如下)
    -->

    <el-pagination
      style="text-align: center"
      :current-page="page"
      :page-size="limit"
      :page-sizes="[3, 5, 10]"
      layout="prev, pager, next,jumper,->,sizes,total"
      :total="total"
    ></el-pagination>

    <el-card>
      <div slot="header"></div>
      <div></div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "pag",
  data(){
    return {
      page:1,
      limit:7,
      total:5,
    }
  }
};
</script>

<style>
</style>