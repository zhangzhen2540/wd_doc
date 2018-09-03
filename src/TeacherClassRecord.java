
/**
* @api {get} /teacherClassRecord/list 上课记录列表
* @apiDescription 上课记录列表
* @apiName teacherClassRecordList
* @apiGroup Lesson
*
* @apiParam {Number} lessonId 课时ID
* @apiParam {String} [startTime] 起始时间，格式2018-09-03 12:00:00
* @apiParam {String} [endTime] 结束时间，格式2018-09-03 12:00:00
*
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object[]} [entity] 上课记录列表 
* @apiSuccess {Number} entity.id 记录ID
* @apiSuccess {Number} entity.teacherId 教师ID
* @apiSuccess {Number} entity.lessonId 课时ID
* @apiSuccess {Number} entity.startTime 开始时间（时间戳）
* @apiSuccess {Number} entity.endTime 结束时间
* @apiSuccess {String} entity.lessonCode 上课lessonCode
* @apiSuccess {String} entity.teacherName 教师姓名
* @apiSuccess {String} entity.teacherNo 教师编码
*
*/





/**
* @api {get} /teacher/get 教师详情
* @apiDescription 教师详情
* @apiName TeacherGet
* @apiGroup Teacher
*
* @apiParam {String} data 教师ID
*
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object} [entity] 结果
* @apiSuccess {Number} entity.id 教师ID
* @apiSuccess {Number} entity.status 教师状态，1：启用，0：禁用
* @apiSuccess {String} entity.name 教师姓名
* @apiSuccess {String} entity.userName 教师登录名
* @apiSuccess {String} entity.teacherNo 教师编码
* @apiSuccess {String} [entity.subject] 分类
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
        "certificationAuditStatus": 0,
        "createTime": 1534862177000,
        "createUserId": 1,
        "createUserName": "admin",
        "id": 2,
        "identity": 2,
        "level": 1,
        "name": "teacher",
        "password": "c8837b23ff8aaa8a2dde915473ce0991",
        "sex": 1,
        "status": 1,
        "teacherNo": "A0001",
        "updateTime": 1534862183000,
        "userName": "teacher"
    },
    "message": "\"SUCCESS\""
}
*/



/**
* @api {get} /teacher/pageList 教师分页查询
* @apiDescription 教师分页查询
* @apiName TeacherPageList
* @apiGroup Teacher
*
* @apiParam {Number=0,1} [status] 状态, 1：启用，0：禁用
* @apiParam {String} [name] 姓名
* @apiParam {String} [userName] 用户名
* @apiParam {String} [teacherNo] 编码 
*
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object} [entity] 结果
* @apiSuccess {Number} entity.total 总结果
* @apiSuccess {Number} entity.pageSize 页最大数量
* @apiSuccess {Number} entity.pageIndex 页码
* @apiSuccess {Object[]} entity.list 教师列表
* @apiSuccess {Number} entity.list.id 教师ID
* @apiSuccess {Number} entity.list.status 状态，1：启用，0：禁用
* @apiSuccess {String} entity.list.name 姓名
* @apiSuccess {String} entity.list.userName 登录名
* @apiSuccess {String} entity.list.teacherNo 编码
* @apiSuccess {Number} entity.list.sex 性别，0：未知，1：男，2：女
* @apiSuccess {Number} [entity.list.subject] 分类
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
                "cellPhoneNo": "13800138E10",
                "certificationAuditStatus": 0,
                "createTime": 1534878201000,
                "createUserId": 1,
                "createUserName": "admin",
                "email": "test@163.com",
                "id": 6,
                "identity": 2,
                "name": "测试教师",
                "sex": 0,
                "status": 1,
                "subject": "Math",
                "teacherNo": "T0001",
                "updateTime": 1534878269000,
                "userName": "T0001"
            }
        ],
        "pageIndex": 0,
        "pageSize": 0,
        "total": 2
    },
    "message": "\"SUCCESS\""
}
*/
