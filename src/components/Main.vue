<template>
  <div class="row">
    <div class="col-sm-2">
      <nav class="menu" data-toggle="menu" style="width: 200px">
        <button class="btn btn-primary"><i class="icon-edit"></i> CREATE</button>
        <button class="btn"><i class="icon-cloud-upload"></i> UPLOAD</button>
        <ul class="nav nav-primary">
          <li><a href="javascript:;"><i class="icon-th"></i> Dashboard</a></li>
          <li><a href="javascript:;"><i class="icon-user"></i> Me</a></li>
          <li class="nav-parent">
            <a href="javascript:;"><i class="icon-time"></i> Time<i
                    class="icon-chevron-right nav-parent-fold-icon"></i><i
                    class="icon-chevron-right nav-parent-fold-icon"></i></a>
            <ul class="nav" style="display: none;">
              <li><a href="" v-link="{path:'/secretary/dashboard'}">dashbord</a></li>
              <li><a href="javascript:;" v-link="{path:'/secretary/users'}">users</a></li>
              <li><a href="javascript:;">Yestorday</a></li>
              <li><a href="javascript:;">This Week</a></li>
            </ul>
          </li>
          <li><a href="javascript:;"><i class="icon-trash"></i> Trash</a></li>
          <li><a href="javascript:;"><i class="icon-list-ul"></i> All</a></li>
          <li class="active nav-parent show">
            <a href="javascript:;"><i class="icon-tasks"></i> Status<i
                    class="icon-chevron-right nav-parent-fold-icon icon-rotate-90"></i><i
                    class="icon-chevron-right nav-parent-fold-icon icon-rotate-90"></i></a>
            <ul class="nav" style="display: block;">
              <li><a href="javascript:;"><i class="icon-circle-blank"></i> Ready</a></li>
              <li class="active"><a href="javascript:;"><i class="icon-play-sign"></i> Ongoing</a></li>
              <li><a href="javascript:;"><i class="icon-ok-sign"></i> Completed</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
    <div class="col-sm-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
module.exports = {
  ready:function(){
    $('[data-toggle="menu"]').menu();
  }
}
</script>