/**
* @api {get} /studentClassRecord/list 学生上课记录列表
* @apiDescription 学生上课记录列表
* @apiName StudentClassRecordList
* @apiGroup Student
*
* @apiParam {String} lessonCode 课时code
* @apiParam {Number} [studentId] 学生ID，教师可以查询特定学生的记录 
*
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object} [entity] 结果
* @apiSuccess {Number} entity.id 记录ID
* @apiSuccess {Number} entity.studentId 上课学生ID
* @apiSuccess {Number} entity.teacherRecordId 上课教师
* @apiSuccess {Number} entity.lessonId 课时ID
* @apiSuccess {String} entity.lessonCode 课时上课code
* @apiSuccess {Number} entity.startTime 学生上课时间
* @apiSuccess {Number} [entity.endTime] 学生下课时间
*
*/



/**
* @api {get} /student/pageList 学生分页查询
* @apiDescription 学生分页查询
* @apiName StudentPageList
* @apiGroup Student
*
* @apiParam {Number=0,1} [status] 学生状态, 1：启用，0：禁用
* @apiParam {String} [name] 学生姓名
* @apiParam {String} [userName] 用户名
* @apiParam {String} [studentNo] 学生编码 
*
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object} [entity] 结果
* @apiSuccess {Number} entity.total 总结果
* @apiSuccess {Number} entity.pageSize 页最大数量
* @apiSuccess {Number} entity.pageIndex 页码
* @apiSuccess {Object[]} entity.list 学生列表
* @apiSuccess {Number} entity.list.id 学生ID
* @apiSuccess {Number} entity.list.status 学生状态，1：启用，0：禁用
* @apiSuccess {String} entity.list.name 学生姓名
* @apiSuccess {String} entity.list.userName 学生登录名
* @apiSuccess {String} entity.list.studentNo 学生编码
* @apiSuccess {String} entity.list.className 班级名
* @apiSuccess {String} entity.list.major 专业编码
* @apiSuccess {String} entity.list.majorName 专业名
* @apiSuccess {Number} entity.list.sex 性别，0：未知，1：男，2：女
* @apiSuccess {Number} entity.list.identity 身份，1：管理员，2：教师，3：学生
* @apiSuccess {String} [entity.list.email] 邮箱
* @apiSuccess {String} [entity.list.cellPhoneNo] 联系电话
* @apiSuccess {Number} entity.list.createUserId 创建用户ID
* @apiSuccess {String} entity.list.createUserName 创建用户名称
* @apiSuccess {Number} entity.list.createTime 创建时间
*
*
{
    "code": 200,
    "entity": {
        "list": [
            {
                "cellPhoneNo": "1.3800138002E10",
                "className": "CS01",
                "createTime": 1535989581000,
                "createUserId": 2,
                "createUserName": "teacher",
                "email": "student2@163.com",
                "id": 7,
                "identity": 3,
                "major": "student.major.math",
                "majorName": "数学",
                "name": "student2",
                "sex": 0,
                "status": 1,
                "studentNo": "S0002",
                "updateTime": 1535989581000,
                "userName": "S0002"
            },
        ],
        "pageIndex": 0,
        "pageSize": 0,
        "total": 4
    },
    "message": "\"SUCCESS\""
}
*/




/**
* @api {get} /student/get 学生详情
* @apiDescription 学生详情
* @apiName StudentGet
* @apiGroup Student
*
* @apiParam {String} data 学生ID
*
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object} [entity] 结果
* @apiSuccess {Number} entity.id 学生ID
* @apiSuccess {Number} entity.status 学生状态，1：启用，0：禁用
* @apiSuccess {String} entity.name 学生姓名
* @apiSuccess {String} entity.userName 学生登录名
* @apiSuccess {String} entity.studentNo 学生编码
* @apiSuccess {String} entity.className 班级名
* @apiSuccess {String} entity.major 专业编码
* @apiSuccess {String} entity.majorName 专业名
* @apiSuccess {Number} entity.sex 性别，0：未知，1：男，2：女
* @apiSuccess {Number} entity.identity 身份，1：管理员，2：教师，3：学生
* @apiSuccess {String} [entity.email] 邮箱
* @apiSuccess {String} [entity.cellPhoneNo] 联系电话
* @apiSuccess {Number} entity.createUserId 创建用户ID
* @apiSuccess {String} entity.createUserName 创建用户名称
* @apiSuccess {Number} entity.createTime 创建时间
*
*
{
    "code": 200,
    "entity": {
        "cellPhoneNo": "1.3800138002E10",
        "className": "CS01",
        "createTime": 1535989581000,
        "createUserId": 2,
        "createUserName": "teacher",
        "email": "student2@163.com",
        "id": 7,
        "identity": 3,
        "major": "student.major.math",
        "majorName": "数学",
        "name": "student2",
        "password": "e10adc3949ba59abbe56e057f20f883e",
        "sex": 0,
        "status": 1,
        "studentNo": "S0002",
        "updateTime": 1535989581000,
        "userName": "S0002"
    },
    "message": "\"SUCCESS\""
}
*/
