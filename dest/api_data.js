define({ "api": [
  {
    "type": "post",
    "url": "/file/upload",
    "title": "文件上传",
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
            "type": "Object",
            "optional": true,
            "field": "entity",
            "description": "<p>文件对象</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.fileType",
            "description": "<p>文件类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.fileTmpName",
            "description": "<p>文件临时保存名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.fileOriginName",
            "description": "<p>文件原始名</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n   \"code\": 200,\n   \"entity\": {\n       \"fileOriginName\": \"teacherData.xls\",\n       \"fileTmpName\": \"680aeccaada049919057eecb6ffcb8c2_1534925455790.xls\",\n       \"fileType\": \"other\"\n   },\n   \"message\": \"\\\"SUCCESS\\\"\"\n}",
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
    "title": "课堂讨论添加",
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
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "attachments",
            "description": "<p>附件</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "attachments.fileLocalPath",
            "description": "<p>附件路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "attachments.fileName",
            "description": "<p>附件名</p>"
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
            "description": "<p>课堂讨论ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/ClassDiscuss.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "post",
    "url": "/classDiscuss/deletes",
    "title": "课堂讨论删除",
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
    "filename": "src/ClassDiscuss.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "get",
    "url": "/classDiscuss/get",
    "title": "课堂讨论获取",
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
            "type": "Object[]",
            "optional": true,
            "field": "entity.attachments",
            "description": "<p>附件列表</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.attachments.id",
            "description": "<p>附件ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.attachments.fileName",
            "description": "<p>附件名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.attachments.fileUrl",
            "description": "<p>附件访问路径</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.attachments.fileLocalPath",
            "description": "<p>附件存储路径</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.attachments.fileSize",
            "description": "<p>附件大小，单位byte</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.attachments.fileType",
            "description": "<p>附件类型</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.attachments.sort",
            "description": "<p>排序编号</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/ClassDiscuss.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "get",
    "url": "/classDiscuss/list",
    "title": "课堂讨论列表",
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
    "filename": "src/ClassDiscuss.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "post",
    "url": "/classDiscuss/modify",
    "title": "课堂讨论修改",
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
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "attachments",
            "description": "<p>附件</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "attachments.fileLocalPath",
            "description": "<p>附件路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "attachments.fileName",
            "description": "<p>附件名</p>"
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
            "description": "<p>课堂讨论ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/ClassDiscuss.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "post",
    "url": "/lessonAssignment/add",
    "title": "课堂作业添加",
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
            "field": "assignmentName",
            "description": "<p>题目</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "attachments",
            "description": "<p>附件</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "attachments.fileLocalPath",
            "description": "<p>附件路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "attachments.fileName",
            "description": "<p>附件名</p>"
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
    "filename": "src/LessonAssignment.java",
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
            "field": "assignmentName",
            "description": "<p>题目</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "attachments",
            "description": "<p>附件</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "attachments.fileLocalPath",
            "description": "<p>附件路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "attachments.fileName",
            "description": "<p>附件名</p>"
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
    "filename": "src/LessonAssignment.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "get",
    "url": "/lessonAssignment/get",
    "title": "课堂作业获取",
    "description": "<p>课堂作业获取</p>",
    "name": "LessonAssignmentGet",
    "group": "Lesson",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>课堂作业ID</p>"
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
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "entity.lessonId",
            "description": "<p>课时ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity.assignmentName",
            "description": "<p>作业标题</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "entity.attachments",
            "description": "<p>附件列表</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.attachments.id",
            "description": "<p>附件ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.attachments.fileName",
            "description": "<p>附件名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.attachments.fileUrl",
            "description": "<p>附件访问路径</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.attachments.fileLocalPath",
            "description": "<p>附件存储路径</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.attachments.fileSize",
            "description": "<p>附件大小，单位byte</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.attachments.fileType",
            "description": "<p>附件类型</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.attachments.sort",
            "description": "<p>排序编号</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/LessonAssignment.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "get",
    "url": "/lesson/detail/query",
    "title": "课时详情查询",
    "name": "LessonDetailQuery",
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
      },
      "examples": [
        {
          "title": "Request-Example: ",
          "content": "lessonId=1",
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
            "type": "Object",
            "optional": true,
            "field": "entity",
            "description": "<p>课时详情</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entity.lesson",
            "description": "<p>课时信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.lesson.id",
            "description": "<p>课时ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.lesson.lessonName",
            "description": "<p>课时名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity.lesson.lessonDesc",
            "description": "<p>课时描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.lesson.courseId",
            "description": "<p>所属课程ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.lesson.teacherGroupId",
            "description": "<p>所属教师组ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "entity.lesson.status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "entity.course",
            "description": "<p>课程信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.course.id",
            "description": "<p>课程ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.course.courseName",
            "description": "<p>课程名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity.course.courseTitle",
            "description": "<p>课程标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity.course.courseDesc",
            "description": "<p>课程介绍</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.course.teacherGroupId",
            "description": "<p>所属教师组ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "entity.course.status",
            "description": "<p>课程状态</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Example:",
          "content": "{\"code\": 500, \"message\": \"param error\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/LessonDetail.java",
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
    "filename": "src/LessonMaterial.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "get",
    "url": "/lessonMaterial/list",
    "title": "课时资料列表查询",
    "description": "<p>课时资料列表查询</p>",
    "name": "LessonMaterialList",
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
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": true,
            "field": "status",
            "description": "<p>资料状态</p>"
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
            "description": "<p>课时资料列表</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.id",
            "description": "<p>课时资料ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.materialName",
            "description": "<p>课时资料名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity.materialDesc",
            "description": "<p>课时资料描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.lessonId",
            "description": "<p>课时ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.materialUrl",
            "description": "<p>资料访问地址</p>"
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
            "description": "<p>资料状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.fileType",
            "description": "<p>资料文件类型</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.fileSize",
            "description": "<p>资料文件大小，单位byte</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "entity.isShare",
            "description": "<p>是否共享资料</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"code\": 200,\n    \"entity\": [\n        {\n            \"createTime\": 1534949063000,\n            \"createUserId\": 1,\n            \"fileSize\": 19456,\n            \"fileType\": \"excel\",\n            \"fromWhere\": 1,\n            \"id\": 1,\n            \"isShare\": 0,\n            \"lessonId\": 2,\n            \"localPath\": \"\\\\excel\\\\db73cc16-652e-46fb-a5da-2f5e0750fae3.xls\",\n            \"materialDesc\": \"test excel\",\n            \"materialName\": \"teacherData.xls\",\n            \"materialUrl\": \"/excel/db73cc16-652e-46fb-a5da-2f5e0750fae3.xls\",\n            \"sort\": 1,\n            \"status\": 1,\n            \"updateTime\": 1534949063000,\n            \"updateUserId\": 1\n        }\n    ],\n    \"message\": \"\\\"SUCCESS\\\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/LessonMaterial.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "get",
    "url": "/lesson/teachingRecord",
    "title": "LessonTeachingRecord",
    "description": "<p>查询课时正在上课的记录</p>",
    "name": "LessonTeachingRecord",
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
            "type": "Number",
            "optional": true,
            "field": "entity",
            "description": "<p>上课记录</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.lessonId",
            "description": "<p>课时ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.lessonName",
            "description": "<p>课时名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "entity.isTeaching",
            "description": "<p>是否上课中</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.teachTeacherId",
            "description": "<p>上课教师ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.teachTeacherName",
            "description": "<p>上课教师姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.startTime",
            "description": "<p>上课开始时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity.endTime",
            "description": "<p>上课结束时间</p>"
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
    "title": "课时资料添加",
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
    "filename": "src/LessonMaterial.java",
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
    "filename": "src/LessonMaterial.java",
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
    "url": "/user/updatePassword",
    "title": "UserUpdatePassword",
    "name": "UserUpdatePassword",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>旧密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>新密码</p>"
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
            "field": "entity",
            "description": "<p>用户ID</p>"
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
          "content": "{\"code\": 500, \"message\": \"旧密码错误\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/User.java",
    "groupTitle": "User"
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
              "2",
              "3"
            ],
            "optional": true,
            "field": "entity.identity",
            "description": "<p>用户身份，1: 管理员，2：教师，3：学生</p>"
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
    "filename": "src/User.java",
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
    "filename": "src/User.java",
    "groupTitle": "User"
  }
] });
