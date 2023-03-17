<template>

  <JqxGrid :width="width" :source="dataAdapter" 
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
          width: '850',
          dataAdapter: new jqx.dataAdapter(this.source),
          columns: [
              { text: '장비', columngroup: 'ProductDetails', datafield: 'ProductName', width: 250 },
              { text: 'Quantity per Unit', columngroup: 'ProductDetails', datafield: 'QuantityPerUnit', cellsalign: 'right', align: 'right' },
              { text: 'Unit Price', columngroup: 'ProductDetails', datafield: 'UnitPrice', align: 'right', cellsalign: 'right', cellsformat: 'c2' },
              { text: 'Units In Stock', datafield: 'UnitsInStock', cellsalign: 'right', cellsrenderer: this.cellsrenderer, width: 100 },
              { text: 'Discontinued', columntype: 'checkbox', datafield: 'Discontinued', align: 'center' }
          ],
          columngroups: [
              { text: 'Product Details', align: 'center', name: 'ProductDetails' }
          ]
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
          root: 'Products',
          record: 'Product',
          id: 'ProductID',
          url: 'sampledata/products.xml'
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