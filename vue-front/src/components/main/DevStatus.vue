<template>

  <JqxGrid :width="width" :source="dataAdapter" :height="height"
             :columns="columns" :columnsresize="true"
             :pageable="true">
  </JqxGrid>

</template>

<script>
import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";

export default {
  components: {
      JqxGrid
  },
  data: function () {
      return {
          width: '1650',
          height: 440,
          dataAdapter: new jqx.dataAdapter(this.source),
          columns: [
                    { text : '그룹명', datafield: 'grpName', minwidth : 130, pinned: true },
                    { text : '장비명', datafield: 'disDevName', minwidth : 150, pinned: true },
                    { text: '대표IP', datafield: 'devIp', width: 120 },
                    { text: '타입코드', datafield: 'devKind1', hidden: true},
                    { text: '종류', datafield: 'devKind2', width: 100, filtertype: 'checkedlist' },
                    { text: '제조사', datafield: 'vendor', width: 130, filtertype: 'checkedlist' },
                    { text: '모델', datafield: 'model', width: 150, filtertype: 'checkedlist' },
                    { text: '최근부팅', datafield: 'upTime', width: 120, cellsalign: 'center'},
                    {
                        text: '부팅후',
                        datafield: 'upTimeSumSec',
                        width: 150,
                        filtertype: 'number'
                    },
                    { text: '장비위치', datafield: 'devLocation', width: 150, hidden: true  },
                    { text: "회선수", datafield: "ifCnt", width: 80, cellsformat: "n", cellsalign: "right", filtertype: "number" },
                    { text: "Alive 수", datafield: "aliveIfCnt", width: 80, cellsformat: "n", cellsalign: "right", filtertype: "number" },
                    { text: "Dead 수", datafield: "deadIfCnt", width: 80, cellsformat: "n", cellsalign: "right", filtertype: "number" , hidden: true},
                    { text: "메모리", datafield: "memory", width: 100 },
                    { text: "CPU사용률", datafield: "cpuPer", width: 100, cellsformat: "d", cellsalign: "right", filtertype: "number" },
                    { text: "메모리사용률", datafield: "memPer", width: 110, cellsformat: "d", cellsalign: "right", filtertype: "number" },
                    { text: '시리얼', datafield: 'machine_serial', width: 130 },
                    { text: 'OS버전', datafield: 'machineVer', width: 130 },
                    { text: "커뮤니티", datafield: "isCommunity", width: 80, hidden:true }
          ],
      }
  },
  beforeCreate: function () {
      this.source = {
          datatype: 'xml',
          datafields: [
              { name: 'ProductName', type: 'string' },
              { name: 'QuantityPerUnit', type: 'int' },
              { name: 'UnitPrice', type: 'float' },
              { name: 'UnitsInStock', type: 'float' },
              { name: 'Discontinued', type: 'bool' }
          ],
      };
  },
  methods: {
      cellsrenderer: function (row, columnsfield, value, defaulthtml, columnproperties, rowdata) {
          if (value < 20) {
              return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '</span>';
          }
          else {
              return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>';
          }
      }
  }
}
</script>

<style scoped>

</style>