<template>
  <div class="myTable">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="code" label="编号"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="date" label="生日"></el-table-column>
      <el-table-column prop="province" label="省份"></el-table-column>
      <el-table-column label="操作" width="220">
        <template #default="scope">
          <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDelete(scope.$index, tableData)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize" @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { getTableList, deleteTableList, updateTableList } from "@/api/api";
import { ElMessageBox, ElMessage } from "element-plus";
export default defineComponent({
  data() {
    return {
      tableData: [],
      total: 0,
      pageIndex: 1,
      pageSize: 10,
    };
  },
  methods: {
    handleEdit(index: number, row: any) {
      let data: {
        id: number;
        name: string;
        code: number;
        province: string;
        date: string;
      } = row;
      data.name = data.name + "1111";
      updateTableList({ index: index, data: data }).then((res) => {
        if (res.result)
          ElMessage({
            type: "success",
            message: "修改成功!",
          });
      });
    },
    handleDelete(index: number, rows: Array<any>) {
      ElMessageBox.confirm("此操作将永久删除该条数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          deleteTableList({ index: index }).then((res) => {
            if (res.result) rows.splice(index, 1);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getTableList() {
      let params = {
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
      };
      getTableList(params).then((res: any) => {
        this.tableData = res.data;
        this.total = res.total;
      });
    },
    handleCurrentChange(index: number) {
      this.pageIndex = index;
      this.getTableList();
    },
  },
  mounted() {
    this.getTableList();
  },
});
</script>
<style lang="scss" scoped>
.myTable {
  .el-pagination {
    text-align: right;
    margin-top: 14px;
  }
}
</style>