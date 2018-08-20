define({ "api": [
  {
    "type": "post",
    "url": "/file/upload",
    "title": "FileUpload",
    "description": "<p>文件上传（提供文件上传到临时路径中，共后续操作使用）</p>",
    "name": "FileUpload",
    "group": "Common",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>上传文件</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "200",
              "500"
            ],
            "optional": false,
            "field": "code",
            "description": "<p>响应码，200为处理成功，其他处理失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity",
            "description": "<p>文件保存名</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\"code\": 200, \"entity\": \"F3323300.doc\", \"message\": \"success\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/FileUpload.java",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/course/teachRecord/query",
    "title": "CourseTeachRecordQuery",
    "description": "<p>课程上课记录查询</p>",
    "name": "CourseTeachRecordQuery",
    "group": "Course",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "courseId",
            "description": "<p>课程ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "teachTeacherId",
            "description": "<p>授课教师ID(管理员查看特定教师授课记录时才需要传值)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "200",
              "500"
            ],
            "optional": false,
            "field": "code",
            "description": "<p>响应码，200为处理成功，其他处理失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "entity",
            "description": "<p>授课记录</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.courseId",
            "description": "<p>课程ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.courseName",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.courseTeacherGroupId",
            "description": "<p>课程教师组ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entity.lessonTeachRecordVos",
            "description": "<p>课时授课记录</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.lessonTeachRecordVos.lessonId",
            "description": "<p>课时ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.lessonTeachRecordVos.lessonName",
            "description": "<p>课时名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entity.lessonTeachRecordVos.teacherLessonVos",
            "description": "<p>教师授课记录</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.lessonTeachRecordVos.teacherLessonVos.lessonCode",
            "description": "<p>授课Code</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.lessonTeachRecordVos.teacherLessonVos.teacherId",
            "description": "<p>教师ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.lessonTeachRecordVos.teacherLessonVos.teacherName",
            "description": "<p>教师名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.lessonTeachRecordVos.teacherLessonVos.startTime",
            "description": "<p>授课开始时间（UTC时间）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.lessonTeachRecordVos.teacherLessonVos.endTime",
            "description": "<p>授课结束时间（UTC时间）</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/CourseTeachRecordQuery.java",
    "groupTitle": "Course"
  },
  {
    "type": "post",
    "url": "/course/deletes",
    "title": "CurseDelete",
    "description": "<p>课程删除</p>",
    "name": "courseDelete",
    "group": "Course",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "courseId",
            "description": "<p>删除课程ID列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: ",
          "content": "[1, 2, 3]",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "200",
              "500"
            ],
            "optional": false,
            "field": "code",
            "description": "<p>响应码，200为处理成功，其他处理失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "entity",
            "description": "<p>删除课程ID列表</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Course.java",
    "groupTitle": "Course"
  },
  {
    "type": "post",
    "url": "/course/edit",
    "title": "CourseEdit",
    "description": "<p>课程编辑</p>",
    "name": "courseEdit",
    "group": "Course",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课程ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courseName",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "teacherGroupId",
            "description": "<p>课程所属教师组ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: ",
          "content": "{\"id\": 1, \"courseName\": \"Java\", \"teacherGroupId\": 1}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "200",
              "500"
            ],
            "optional": false,
            "field": "code",
            "description": "<p>响应码，200为处理成功，其他处理失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity",
            "description": "<p>课程ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Course.java",
    "groupTitle": "Course"
  },
  {
    "type": "get",
    "url": "/course/list",
    "title": "CurseList",
    "description": "<p>课程列表查询</p>",
    "name": "courseList",
    "group": "Course",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "courseName",
            "description": "<p>课程名称（模糊匹配）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "courseTitle",
            "description": "<p>课程标题（模糊匹配）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "teacherGroupId",
            "description": "<p>教师组ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "status",
            "description": "<p>课程状态，1:启用，0:禁用</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "deleteStatus",
            "description": "<p>删除状态，1:未删除，0：已删除</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: ",
          "content": "courseName=Java&courseTitle=Java",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "200",
              "500"
            ],
            "optional": false,
            "field": "code",
            "description": "<p>响应码，200为处理成功，其他处理失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "entity",
            "description": "<p>课程信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.id",
            "description": "<p>课程ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.courseName",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity.courseTitle",
            "description": "<p>课程标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity.courseDesc",
            "description": "<p>课程描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "entity.teacherGroupId",
            "description": "<p>课程所属教师组ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "entity.status",
            "description": "<p>课程状态，1：启用，0：禁用</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "entity.deleteStatus",
            "description": "<p>课程删除状态，1：未删除，0：删除</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "entity.sort",
            "description": "<p>课程排序</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Course.java",
    "groupTitle": "Course"
  },
  {
    "type": "post",
    "url": "/classDiscuss/add",
    "title": "ClassDiscussAdd",
    "description": "<p>课时讨论添加</p>",
    "name": "ClassDiscussAdd",
    "group": "Lesson",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lessonId",
            "description": "<p>课时ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "discussContent",
            "description": "<p>讨论内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "attachmentPath",
            "description": "<p>资料路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "answer",
            "description": "<p>答案</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "analysis",
            "description": "<p>解析</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "200",
              "500"
            ],
            "optional": false,
            "field": "code",
            "description": "<p>响应码，200为处理成功，其他处理失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "entity",
            "description": "<p>课时讨论ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Lesson.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "post",
    "url": "/classDiscuss/deletes",
    "title": "ClassDiscussDelete",
    "description": "<p>课时讨论删除</p>",
    "name": "ClassDiscussDelete",
    "group": "Lesson",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "classDiscussId",
            "description": "<p>课堂讨论ID，删除的讨论必须是属于同一课时的</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "200",
              "500"
            ],
            "optional": false,
            "field": "code",
            "description": "<p>响应码，200为处理成功，其他处理失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "entity",
            "description": "<p>删除课堂讨论ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Lesson.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "get",
    "url": "/classDiscuss/get",
    "title": "ClassDiscussGet",
    "description": "<p>课堂讨论获取</p>",
    "name": "ClassDiscussGet",
    "group": "Lesson",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课堂讨论ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "200",
              "500"
            ],
            "optional": false,
            "field": "code",
            "description": "<p>响应码，200为处理成功，其他处理失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "entity",
            "description": "<p>课堂讨论</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.id",
            "description": "<p>讨论ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.lessonId",
            "description": "<p>所属课时</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.discussContent",
            "description": "<p>讨论内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity.answer",
            "description": "<p>参考答案</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity.analysis",
            "description": "<p>参考解析</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "entity.status",
            "description": "<p>状态，1：启用，0：禁用</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.sort",
            "description": "<p>排序编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.discussUrl",
            "description": "<p>附件文件路径</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.fileType",
            "description": "<p>附件文件类型</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.fileSize",
            "description": "<p>附件文件大小，单位byte</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Lesson.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "get",
    "url": "/classDiscuss/list",
    "title": "ClassDiscussList",
    "description": "<p>课堂讨论列表</p>",
    "name": "ClassDiscussList",
    "group": "Lesson",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lessonId",
            "description": "<p>课时ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "200",
              "500"
            ],
            "optional": false,
            "field": "code",
            "description": "<p>响应码，200为处理成功，其他处理失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "entity",
            "description": "<p>课堂讨论列表，按sort排序（具体字段参考ClassDiscussGet API）</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Lesson.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "post",
    "url": "/classDiscuss/modify",
    "title": "ClassDiscussModify",
    "description": "<p>课时讨论修改</p>",
    "name": "ClassDiscussModify",
    "group": "Lesson",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课堂讨论ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lessonId",
            "description": "<p>课时ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "discussContent",
            "description": "<p>讨论内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "attachmentPath",
            "description": "<p>资料路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "answer",
            "description": "<p>答案</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "analysis",
            "description": "<p>解析</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "200",
              "500"
            ],
            "optional": false,
            "field": "code",
            "description": "<p>响应码，200为处理成功，其他处理失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "entity",
            "description": "<p>课时讨论ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Lesson.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "post",
    "url": "/lessonAssignment/add",
    "title": "LessonAssignmentAdd",
    "description": "<p>课堂作业添加</p>",
    "name": "LessonAssignmentAdd",
    "group": "Lesson",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lessonId",
            "description": "<p>课时ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "assignmentsName",
            "description": "<p>题目</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "attachmentPath",
            "description": "<p>资料路径</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "200",
              "500"
            ],
            "optional": false,
            "field": "code",
            "description": "<p>响应码，200为处理成功，其他处理失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "entity",
            "description": "<p>课堂作业ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Lesson.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "post",
    "url": "/lessonAssignment/update",
    "title": "LessonAssignmentEdit",
    "description": "<p>课堂作业修改</p>",
    "name": "LessonAssignmentEdit",
    "group": "Lesson",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>作业ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lessonId",
            "description": "<p>课时ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "assignmentsName",
            "description": "<p>题目</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "attachmentPath",
            "description": "<p>资料路径</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "200",
              "500"
            ],
            "optional": false,
            "field": "code",
            "description": "<p>响应码，200为处理成功，其他处理失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "entity",
            "description": "<p>课堂作业ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Lesson.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "post",
    "url": "/lessonMaterial/copy/edit",
    "title": "LessonMaterialCopy",
    "description": "<p>复制课件资料到指定课时下</p>",
    "name": "LessonMaterialCopy",
    "group": "Lesson",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "targetLessonId",
            "description": "<p>课时ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lessonMaterialId",
            "description": "<p>拷贝课件资料ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "200",
              "500"
            ],
            "optional": false,
            "field": "code",
            "description": "<p>响应码，200为处理成功，其他处理失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "entity",
            "description": "<p>新建课时资料ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Lesson.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "post",
    "url": "/questionAnswer/submit/edit",
    "title": "QuestionAnswerSubmit",
    "description": "<p>提交问题答案</p>",
    "name": "QuestionAnswerSubmit",
    "group": "Lesson",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "questionId",
            "description": "<p>问题ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "2",
              "3",
              "4"
            ],
            "optional": false,
            "field": "questionType",
            "description": "<p>问题类型,1: 选择题, 2: 判断题, 3: 填空题, 4: 简答题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "answerContent",
            "description": "<p>答案</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "isSubmit",
            "description": "<p>是否提交</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "200",
              "500"
            ],
            "optional": false,
            "field": "code",
            "description": "<p>响应码，200为处理成功，其他处理失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "entity",
            "description": "<p>答题记录ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/QuestionAnswerSubmit.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "post",
    "url": "/lesson/deletes",
    "title": "LessonDelete",
    "description": "<p>课时删除</p>",
    "name": "lessonDelete",
    "group": "Lesson",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "lessonId",
            "description": "<p>删除课时ID列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: ",
          "content": "[1, 2, 3]",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "200",
              "500"
            ],
            "optional": false,
            "field": "code",
            "description": "<p>响应码，200为处理成功，其他处理失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "entity",
            "description": "<p>删除课时ID列表</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Lesson.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "post",
    "url": "/lesson/edit",
    "title": "LessonEdit",
    "description": "<p>课时编辑</p>",
    "name": "lessonEdit",
    "group": "Lesson",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>课时ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lessonName",
            "description": "<p>课时名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lessonDesc",
            "description": "<p>课时描述</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "courseId",
            "description": "<p>课程ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: ",
          "content": "{\"id\": 1, \"lessonName\": \"21天精通Java\", \"lessonDesc\": \"Java基础学习\", \"courseId\": 1}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "200",
              "500"
            ],
            "optional": false,
            "field": "code",
            "description": "<p>响应码，200为处理成功，其他处理失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity",
            "description": "<p>课时ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Lesson.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "post",
    "url": "/lessonMaterial/add",
    "title": "LessonMaterialAdd",
    "description": "<p>课时资料添加</p>",
    "name": "lessonMaterialAdd",
    "group": "Lesson",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lessonId",
            "description": "<p>课时ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "materialName",
            "description": "<p>资料名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": false,
            "field": "fromWhere",
            "description": "<p>资料来源，1：上传，2：资料库</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "materialBankId",
            "description": "<p>资料库资料ID(资料来源自资料库时必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "localPath",
            "description": "<p>资料路径（上传资料时必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "isShare",
            "description": "<p>是否共享，1：共享，0：不共享</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "materialDesc",
            "description": "<p>资料描述</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "200",
              "500"
            ],
            "optional": false,
            "field": "code",
            "description": "<p>响应码，200为处理成功，其他处理失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "entity",
            "description": "<p>课时资料ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Lesson.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "post",
    "url": "/lessonMaterial/deletes",
    "title": "LessonMaterialDelete",
    "description": "<p>课时资料删除</p>",
    "name": "lessonMaterialDelete",
    "group": "Lesson",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "lessonMaterialId",
            "description": "<p>删除课时资料ID列表</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "200",
              "500"
            ],
            "optional": false,
            "field": "code",
            "description": "<p>响应码，200为处理成功，其他处理失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": true,
            "field": "entity",
            "description": "<p>删除课时资料ID列表</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Lesson.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "post",
    "url": "/lesson/add",
    "title": "PrepareLesson",
    "description": "<p>备课</p>",
    "name": "prepareLesson",
    "group": "Lesson",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lessonName",
            "description": "<p>课时名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lessonDesc",
            "description": "<p>课时描述</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "courseId",
            "description": "<p>课程ID（创建已存在的课程的课时时必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "courseName",
            "description": "<p>课程名称，新建课程时必填</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "courseTitle",
            "description": "<p>课程标题，新建课程选填</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "courseDesc",
            "description": "<p>课程描述，新建课程选填</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: ",
          "content": "{ \"lessonName\": \"21天精通Java\", \"lessonDesc\": \"Java基础学习\", \"courseId\": 1}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "200",
              "500"
            ],
            "optional": false,
            "field": "code",
            "description": "<p>响应码，200为处理成功，其他处理失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity",
            "description": "<p>新建课时ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Lesson.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "post",
    "url": "/teacher/import/edit",
    "title": "TeacherDataImport",
    "description": "<p>教师数据导入</p>",
    "name": "TeacherDataImport",
    "group": "Teacher",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fileName",
            "description": "<p>上传文件名</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "override",
            "description": "<p>如果导入数据教师编号重复，如何处理(override不传：返回错误，true: 覆盖， false: 丢弃)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "200",
              "500"
            ],
            "optional": false,
            "field": "code",
            "description": "<p>响应码，200为处理成功，其他处理失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity",
            "description": "<p>文件保存名</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\"code\": 200, \"entity\": \"F3323300.doc\", \"message\": \"success\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/DataImport.java",
    "groupTitle": "Teacher"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Login",
    "name": "userLogin",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>登陆名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lessonCode",
            "description": "<p>课时编号，学生登陆即开始学习</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: ",
          "content": "{ \"userName\": \"admin\", \"password\": \"123456\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "200",
              "500"
            ],
            "optional": false,
            "field": "code",
            "description": "<p>响应码，200为处理成功，其他处理失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>响应描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "entity",
            "description": "<p>登陆用户信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.userName",
            "description": "<p>用户登录名</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "1",
              "2",
              "3"
            ],
            "optional": false,
            "field": "entity.sex",
            "description": "<p>性别，1:男，2：女，3：未知</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity.cellPhoneNo",
            "description": "<p>电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity.email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": true,
            "field": "entity.identity",
            "description": "<p>用户身份，1：教师，2：学生</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity.socialContantNo",
            "description": "<p>社交账号</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Example:",
          "content": "{\"code\": 500, \"message\": \"用户名或密码错误\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/Login.java",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/logout",
    "title": "Logout",
    "name": "userLogout",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "200",
              "500"
            ],
            "optional": false,
            "field": "code",
            "description": "<p>响应码，200为处理成功，其他处理失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "message",
            "description": "<p>响应描述</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\"code\": 200, \"message\": \"success\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Example:",
          "content": "{\"code\": 500, \"message\": \"用户名或密码错误\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/Login.java",
    "groupTitle": "User"
  }
] });
