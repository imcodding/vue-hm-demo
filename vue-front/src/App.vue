<template>
    <div>
      <Nav></Nav>
      <JqxSplitter :width="1915" :height="880" :orientation="'vertical'"
                  :panels="[{ size: '15%' }, { size: '85%' }]">
          <div>
              <Group></Group>
          </div>
          <div>
              <JqxSplitter class="jqx-splitter-nested"
                          :width="'100%'" :height="'100%'" :orientation="'horizontal'"
                          :panels="[{ size: '50%' }, { size: '50%' }]">
                  <div>
                      <!-- <router-view></router-view> -->
                      <dev-status></dev-status>
                  </div>
                  <div>
                      <span>요약</span>
                  </div>
              </JqxSplitter>
          </div>
      </JqxSplitter>
    </div>
</template>

<script>
import Group from './components/common/Group.vue'
import Nav from './components/common/Nav.vue'
import DevStatus from './components/main/DevStatus.vue'

import JqxSplitter from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxsplitter.vue';

// import './assets/css/netis.css'

export default {
  components: {
    Nav,
    Group,
    DevStatus,
    JqxSplitter
  },

}
</script>

<style>
body {
  margin:0;
}
.jqx-splitter-nested {
      border: none !important;
  }
</style>
<style src='./assets/styles/jqwidgets/jqx.base.css'></style>
<style src='./assets/styles/jqwidgets/jqx.material-green.css'></style>