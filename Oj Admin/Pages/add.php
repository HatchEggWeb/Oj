
            <!-- Add Student from Excel -->
            <div class="modal fade"  id="upload-excel" tabindex="-1" role="dialog" aria-labelledby="UploadExcel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <h4 class="modal-title" id="UploadExcel">Upload an Excel</h4>
                        </div>
                        <div class="modal-body">
                            <form>
                                <label for="added-excel">上传Excel文件</label>
                                <input type="file" id="uploaded-excel">
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                            <button id="add-one-problem-submit" type="button" class="btn btn-primary">上传</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Class List</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">添加课程</div>
                        <div class="panel-body">
							<form>
                                <div class="row">
                                    <div class="col-lg-5 col-md-6">
                                        <div class="form-group">
                                            <label for="add-class-name">课程名称</label>
                                            <input class="form-control" type="text" name="add-class-name" placeholder="name">
                                        </div>
                                    </div>
                                    <div class="col-lg-5 col-md-6">
                                        <div class="form-group">
                                            <label for="add-class-teacher">任课老师</label>
                                            <input class="form-control" type="text" name="add-class-teacher" placeholder="teacher">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-10">
                                        <div class="form-group">
                                            <label for="add-class-describe">课程简介</label>
                                            <textarea class="form-control" name="add-class-describe" rows="4" placeholder="describe"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-10">
                                        <div class="form-group">
                                            <label for="add-class-time">课程时间</label>
                                            <input type="text" name="add-class-time" id="add-class-time" class="form-control" value="03/18/2018 - 07/23/2018">
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div class="row">
                                <div class="col-lg-10">
                                    <div class="panel panel-default">
                                        <div class="panel-heading"><button class="btn btn-info" type="button" data-toggle="modal" data-target="#upload-excel">添加学生</button></div>
                                        <div class="panel-body">
                                            <div class="table-responsive">
                                                <table class="table table-striped table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th style="width: 180px">Student Number</th>
                                                            <th>Name</th>
                                                            <th style="width: 100px">Option</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>221500134</td>
                                                            <td>张翊卓</td>
                                                            <td><a href="#">删除</a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
            <script src="../dist/js/admin-class-add.js"></script>
            

        