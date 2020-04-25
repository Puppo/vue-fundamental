import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartsInfo from '../parts/PartsInfo.vue';
import BrowserParts from '../parts/BrowserPart.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';
import RobotBases from '../parts/RobotBases.vue';
import SidebarStandard from '../sidebar/SidebarStandard.vue';
import SidebarBuild from '../sidebar/SidebarBuild.vue';
import ShoppingCart from '../cart/ShoppingCart.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,
      sidebar: SidebarStandard,
    },
  }, {
    path: '/build',
    name: 'Build',
    components: {
      default: RobotBuilder,
      sidebar: SidebarBuild,
    },
  }, {
    path: '/parts/browser',
    name: 'BrowserParts',
    components: {
      default: BrowserParts,
      sidebar: SidebarBuild,
    },
    children: [{
      path: 'heads',
      name: 'BrowserHeads',
      component: RobotHeads,
    }, {
      path: 'arms',
      name: 'BrowserArms',
      component: RobotArms,
    }, {
      path: 'torsos',
      name: 'BrowserTorsos',
      component: RobotTorsos,
    }, {
      path: 'bases',
      name: 'BrowserBases',
      component: RobotBases,
    }],
  }, {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartsInfo,
    props: true,
    beforeEnter(to, from, next) {
      const isValidId = Number.isInteger(Number(to.params.id));
      next(isValidId);
    },
  }, {
    path: '/cart',
    name: 'Cart',
    component: ShoppingCart,
  }],
});
