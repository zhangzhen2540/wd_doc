/**
* @api {post} /lesson/add 课时创建
* @apiDescription 备课
* @apiName prepareLesson
* @apiGroup Lesson
*
* @apiParam {String} lessonName 课时名称
* @apiParam {String} [lessonDesc] 课时描述
* @apiParam {Number} [courseId] 课程ID（创建已存在的课程的课时时必填）
* @apiParam {String} [courseName] 课程名称，新建课程时必填
* @apiParam {String} [courseTitle] 课程标题，新建课程选填
* @apiParam {String} [courseDesc] 课程描述，新建课程选填
*
* @apiParamExample {json} Request-Example: 
* { "lessonName": "21天精通Java", "lessonDesc": "Java基础学习", "courseId": 1}	
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {String} [entity] 新建课时ID
*
*/

/**
* @api {post} /lesson/edit 课时编辑
* @apiDescription 课时编辑
* @apiName lessonEdit
* @apiGroup Lesson
*
* @apiParam {Number} id 课时ID
* @apiParam {String} lessonName 课时名称
* @apiParam {String} [lessonDesc] 课时描述
* @apiParam {Number} courseId 课程ID
*
* @apiParamExample {json} Request-Example: 
* {"id": 1, "lessonName": "21天精通Java", "lessonDesc": "Java基础学习", "courseId": 1}	
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {String} [entity] 课时ID
*
*/

/**
* @api {post} /lesson/deletes 课时删除
* @apiDescription 课时删除
* @apiName lessonDelete
* @apiGroup Lesson
*
* @apiParam {Number[]} lessonId 删除课时ID列表
*
* @apiParamExample {json} Request-Example: 
* [1, 2, 3]	
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Number[]} [entity] 删除课时ID列表
*
*/


// *
// * @api {get} /lesson/teachingRecord 查询课时正在上课的记录
// * @apiDescription 查询课时正在上课的记录
// * @apiName LessonTeachingRecord
// * @apiGroup Lesson
// *
// * @apiParam {Number} lessonId 课时ID
// *
// * @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
// * @apiSuccess {String} [message] 响应描述
// * @apiSuccess {Number} [entity] 上课记录
// * @apiSuccess {Number} entity.lessonId 课时ID 
// * @apiSuccess {String} entity.lessonName 课时名称 
// * @apiSuccess {Boolean} entity.isTeaching 是否上课中 
// * @apiSuccess {Number} entity.teachTeacherId 上课教师ID 
// * @apiSuccess {String} entity.teachTeacherName 上课教师姓名 
// * @apiSuccess {String} entity.startTime 上课开始时间 
// * @apiSuccess {String} [entity.endTime] 上课结束时间 
// *






/**
* @api {get} /lesson/list 课时列表
* @apiDescription 课时列表
* @apiName lessonList
* @apiGroup Lesson
*
* @apiParam {String} [lessonName] 课时名称（模糊匹配）
* @apiParam {String} [courseId] 课程ID
* @apiParam {Number} [teacherGroupId] 教师组ID
* @apiParam {Number=0,1} [status] 课时状态，1:启用，0:禁用
* @apiParam {Number=0,1} [deleteStatus] 删除状态，1:未删除，0：已删除
*
* @apiParamExample {String} Request-Example: 
*  courseId=1&lessonName=name
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object[]} [entity] 课程信息
* @apiSuccess {Number} entity.id 课时ID
* @apiSuccess {Number} entity.courseId 课程ID
* @apiSuccess {String} entity.lessonName 课时名称
* @apiSuccess {String} [entity.lessonDesc] 课时简介
* @apiSuccess {Number=0,1} entity.status 课时状态，1：启用，0：禁用
* @apiSuccess {Number=0,1} entity.deleteStatus 删除状态，1：未删除
* @apiSuccess {Number} entity.createTime 课时创建时间
* @apiSuccess {Number} entity.updateTime 课时更新时间
* @apiSuccess {Number=0,1,2} [entity.teachingStatus] 授课状态，登录用户为教师时返回（0：未授课；1：授课中；2：授课结束）
*
* @apiSuccessExample Success-Example:
{
    "code": 200,
    "entity": [
        {
            "courseId": 1,
            "createTime": 1534936024000,
            "createUserId": 2,
            "deleteStatus": 1,
            "id": 5,
            "lessonName": "lesson a name",
            "status": 1,
            "teacherGroupId": 1,
            "updateTime": 1534936024000,
            "updateUserId": 2,
            "teachingStatus": 1
        }
    ],
    "message": "\"SUCCESS\""
}
*/




/**
* @api {get} /lesson/pageList 课时分页
* @apiDescription 课时分页
* @apiName lessonPageList
* @apiGroup Lesson
*
* @apiParam {String} [lessonName] 课时名称（模糊匹配）
* @apiParam {String} [courseId] 课程ID
* @apiParam {Number} [teacherGroupId] 教师组ID
* @apiParam {Number=0,1} [status] 课时状态，1:启用，0:禁用
* @apiParam {Number=0,1} [deleteStatus] 删除状态，1:未删除，0：已删除
* @apiParam {Number} pageSize 页最大数量
* @apiParam {Number} pageIndex 页码
*
* @apiParamExample {String} Request-Example: 
*  courseId=1&lessonName=name
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object} [entity] 课程信息
* @apiSuccess {Number} entity.total 结果总数
* @apiSuccess {Number} entity.pageSize 页最大数量
* @apiSuccess {Number} entity.pageIndex 页码
* @apiSuccess {Object[]} entity.list 课时列表
* @apiSuccess {Number} entity.list.id 课时ID
* @apiSuccess {Number} entity.list.courseId 课程ID
* @apiSuccess {String} entity.list.lessonName 课时名称
* @apiSuccess {String} [entity.list.lessonDesc] 课时简介
* @apiSuccess {Number=0,1} entity.list.status 课时状态，1：启用，0：禁用
* @apiSuccess {Number=0,1} entity.list.deleteStatus 删除状态，1：未删除
* @apiSuccess {Number} entity.list.createTime 课时创建时间
* @apiSuccess {Number} entity.list.updateTime 课时更新时间
* @apiSuccess {Number=0,1,2} [entity.list.teachingStatus] 授课状态，登录用户为教师时返回（0：未授课；1：授课中；2：授课结束）
*
* @apiSuccessExample Success-Example:
{
    "code": 200,
    "entity": {
        "list": [
            {
                "courseId": 1,
                "createTime": 1534936024000,
                "createUserId": 2,
                "deleteStatus": 1,
                "id": 5,
                "lessonName": "lesson a name",
                "status": 1,
                "teacherGroupId": 1,
                "updateTime": 1534936024000,
                "updateUserId": 2,
                "teachingStatus": 1
            }
        ],
        "pageIndex": 0,
        "pageSize": 0,
        "total": 1
    },
    "message": "\"SUCCESS\""
}
*/








/**
* @api {get} /deletedLesson/pageList 已删除课时查询
* @apiDescription 删除课时查询
* @apiName deletedLessonPageList
* @apiGroup Lesson
*
* @apiParam {String} [lessonName] 课时名称（模糊匹配）
* @apiParam {String} [courseName] 课程名称（模糊匹配）
* @apiParam {Number} [createUserName] 课时创建用户名称（模糊匹配）
* @apiParam {Number} pageSize 页最大数量
* @apiParam {Number} pageIndex 页码
*
* @apiParamExample {String} Request-Example: 
*  createUserName=teacher&pageIndex=1&lessonName=lesson&courseName=AW
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {Object} [entity] 课程信息
* @apiSuccess {Number} entity.total 结果总数
* @apiSuccess {Number} entity.pageSize 页最大数量
* @apiSuccess {Number} entity.pageIndex 页码
* @apiSuccess {Object[]} entity.list 删除课时列表
* @apiSuccess {Number} entity.list.lessonId 课时ID
* @apiSuccess {String} entity.list.lessonName 课时名称
* @apiSuccess {String} [entity.list.lessonDesc] 课时描述
* @apiSuccess {Number} entity.list.lessonStatus 课时状态，1：启用，0：禁用
* @apiSuccess {Number} entity.list.lessonDeleteStatus 课时删除状态，1：未删除，0：已删除
* @apiSuccess {Number} entity.list.lessonTeacherGroupId 课时教师组ID
* @apiSuccess {Number} entity.list.lessonCreateTime 课时创建时间
* @apiSuccess {Number} entity.list.lessonUpdateTime 课时更新时间
* @apiSuccess {Number} entity.list.lessonCreateUserId 课时创建用户ID
* @apiSuccess {String} entity.list.lessonCreateUserName 课时创建用户名
* @apiSuccess {Number} entity.list.courseId 课程ID
* @apiSuccess {Number} entity.list.courseName 课程名称
* @apiSuccess {Number} [entity.list.courseTitle] 课程Title
* @apiSuccess {Number} entity.list.courseTeacherGroupId 课程教师组ID
* @apiSuccess {Number} entity.list.courseStatus 课程状态，1：启用，0：禁用
* @apiSuccess {Number} entity.list.courseDeleteStatus 课程删除状态，1：未删除，0：已删除
* @apiSuccess {Number} entity.list.courseCreateTime 课程创建时间
* @apiSuccess {Number} entity.list.courseUpdateTime 课程更新时间
*
* @apiSuccessExample Success-Example:
{
    "code": 200,
    "entity": {
        "list": [
            {
                "courseCreateTime": 1534871890000,
                "courseDeleteStatus": 1,
                "courseId": 1,
                "courseName": "AWERQE",
                "courseStatus": 1,
                "courseTeacherGroupId": 1,
                "courseUpdateTime": 1534871890000,
                "lessonCreateTime": 1534936024000,
                "lessonCreateUserId": 2,
                "lessonCreateUserName": "teacher",
                "lessonDeleteStatus": 0,
                "lessonId": 5,
                "lessonName": "lesson a name",
                "lessonStatus": 1,
                "lessonTeacherGroupId": 1,
                "lessonUpdateTime": 1536075964000
            }
        ],
        "pageIndex": 0,
        "pageSize": 0,
        "total": 1
    },
    "message": "\"SUCCESS\""
}
*/





/**
* @api {post} /lesson/recovery/edit 恢复删除的课时
* @apiDescription 恢复删除的课时
* @apiName lessonRecoveryEdit
* @apiGroup Lesson
*
* @apiParam {Number[]} lessonId 课时ID数组
*
* @apiParamExample {String} Request-Example: 
*  [1, 2, 3]
*
* @apiSuccess {Number=200,500} code 响应码，200为处理成功，其他处理失败
* @apiSuccess {String} [message] 响应描述
* @apiSuccess {String} [entity] 课时ID
*
* @apiSuccessExample Success-Example:
{
    "code": 200,
    "entity": "[1, 2, 3]",
    "message": "\"SUCCESS\""
}
*/
