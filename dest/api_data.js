define({ "api": [
  {
    "type": "post",
    "url": "/materialBank/add",
    "title": "公共资料添加",
    "description": "<p>公共资料添加</p>",
    "name": "MaterialBankAdd",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "materialName",
            "description": "<p>资料名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "localPath",
            "description": "<p>资料上传返回的临时路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "materialType",
            "description": "<p>资料归属类别（关联字典表code）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n\t\"materialName\": \"abcdefg.txt\",\n\t\"localPath\": \"b01761814d004f4399c6784b8fe46044.txt\",\n\t\"materialType\": \"material.type.math\"\n}",
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
            "description": "<p>新增资料ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Succcess-Example:",
          "content": "{\n    \"code\": 200,\n    \"entity\": \"2\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/MaterialBank.java",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/materialBank/deletes",
    "title": "公共资料删除",
    "description": "<p>公共资料删除</p>",
    "name": "MaterialBankDeletes",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "ids",
            "description": "<p>资料ID列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "[1, 3, 4]",
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
            "description": "<p>删除资料ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Succcess-Example:",
          "content": "{\n    \"code\": 200,\n    \"entity\": \"[1, 3, 4]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/MaterialBank.java",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/materialBank/get",
    "title": "公共资源详情",
    "description": "<p>公共资源详情</p>",
    "name": "MaterialBankGet",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>资源ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "data=2",
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
            "description": "<p>资源详情</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.id",
            "description": "<p>资源ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.materialName",
            "description": "<p>资源名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.materialUrl",
            "description": "<p>资源访问路径</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity.materialType",
            "description": "<p>资源类别code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity.materialTypeDesc",
            "description": "<p>资源类别描述</p>"
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
            "description": "<p>资源状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.fileSize",
            "description": "<p>资源文件大小，单位byte</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.fileType",
            "description": "<p>资源文件类型</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.createTime",
            "description": "<p>资源上传时间（时间戳）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Succcess-Example:",
          "content": "{\n    \"code\": 200,\n    \"entity\": {\n        \"createTime\": 1535391061000,\n        \"createUserId\": 2,\n        \"fileSize\": 59904,\n        \"fileType\": \"other\",\n        \"id\": 2,\n        \"localPath\": \"\\\\other\\\\b01761814d004f4399c6784b8fe46044_1535362261190_uxAw.txt\",\n        \"materialName\": \"abcdefg.txt\",\n        \"materialType\": \"material.type.math\",\n        \"materialTypeDesc\": \"高等数学\",\n        \"materialUrl\": \"/other/b01761814d004f4399c6784b8fe46044_1535362261190_uxAw.txt\",\n        \"status\": 1,\n        \"updateTime\": 1535391061000,\n        \"updateUserId\": 2\n    },\n    \"message\": \"\\\"SUCCESS\\\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/MaterialBank.java",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/materialBank/list",
    "title": "公共资源列表",
    "description": "<p>公共资源列表</p>",
    "name": "MaterialBankList",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "materialName",
            "description": "<p>资源名称(模糊匹配)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fileType",
            "description": "<p>文件类型</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "materialName=abc",
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
            "type": "Object[]",
            "optional": true,
            "field": "entity",
            "description": "<p>资源详情列表</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.id",
            "description": "<p>资源ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.materialName",
            "description": "<p>资源名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.materialUrl",
            "description": "<p>资源访问路径</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity.materialType",
            "description": "<p>资源类别code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity.materialTypeDesc",
            "description": "<p>资源类别描述</p>"
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
            "description": "<p>资源状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.fileSize",
            "description": "<p>资源文件大小，单位byte</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.fileType",
            "description": "<p>资源文件类型</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.createTime",
            "description": "<p>资源上传时间（时间戳）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Succcess-Example:",
          "content": "{\n    \"code\": 200,\n    \"entity\": [\n        {\n            \"createTime\": 1535391061000,\n            \"createUserId\": 2,\n            \"fileSize\": 59904,\n            \"fileType\": \"other\",\n            \"id\": 2,\n            \"localPath\": \"\\\\other\\\\b01761814d004f4399c6784b8fe46044_1535362261190_uxAw.txt\",\n            \"materialName\": \"abcdefg.txt\",\n            \"materialType\": \"material.type.math\",\n            \"materialTypeDesc\": \"高等数学\",\n            \"materialUrl\": \"/other/b01761814d004f4399c6784b8fe46044_1535362261190_uxAw.txt\",\n            \"status\": 1,\n            \"updateTime\": 1535391061000,\n            \"updateUserId\": 2\n        }\n    ],\n    \"message\": \"\\\"SUCCESS\\\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/MaterialBank.java",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/materialBank/list",
    "title": "公共资源分页列表",
    "description": "<p>公共资源分页列表</p>",
    "name": "MaterialBankPageList",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "materialName",
            "description": "<p>资源名称(模糊匹配)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fileType",
            "description": "<p>文件类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pageIndex",
            "description": "<p>页码（默认0）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pageSize",
            "description": "<p>页最大展示数量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "pageIndex=1&pageSize=20&materialName=abc",
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
            "description": "<p>查询结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "entity.total",
            "description": "<p>总结果数量</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "entity.pageIndex",
            "description": "<p>页码</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "entity.pageSize",
            "description": "<p>页最大展示数量</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "entity.list",
            "description": "<p>资源列表</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.list.id",
            "description": "<p>资源ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.list.materialName",
            "description": "<p>资源名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.list.materialUrl",
            "description": "<p>资源访问路径</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity.list.materialType",
            "description": "<p>资源类别code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity.list.materialTypeDesc",
            "description": "<p>资源类别描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "entity.list.status",
            "description": "<p>资源状态</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.list.fileSize",
            "description": "<p>资源文件大小，单位byte</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.list.fileType",
            "description": "<p>资源文件类型</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.list.createTime",
            "description": "<p>资源上传时间（时间戳）</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Succcess-Example:",
          "content": "{\n    \"code\": 200,\n    \"entity\": {\n        \"list\": [\n            {\n                \"createTime\": 1535391061000,\n                \"createUserId\": 2,\n                \"fileSize\": 59904,\n                \"fileType\": \"other\",\n                \"id\": 2,\n                \"localPath\": \"\\\\other\\\\b01761814d004f4399c6784b8fe46044_1535362261190_uxAw.txt\",\n                \"materialName\": \"abcdefg.txt\",\n                \"materialType\": \"material.type.math\",\n                \"materialUrl\": \"/other/b01761814d004f4399c6784b8fe46044_1535362261190_uxAw.txt\",\n                \"status\": 1,\n                \"updateTime\": 1535391061000,\n                \"updateUserId\": 2\n            }\n        ],\n        \"pageIndex\": 0,\n        \"pageSize\": 0,\n        \"total\": 1\n    },\n    \"message\": \"\\\"SUCCESS\\\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/MaterialBank.java",
    "groupTitle": "Admin"
  },
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
    "url": "/course/get",
    "title": "课程详情",
    "description": "<p>课程详情</p>",
    "name": "CourseGet",
    "group": "Course",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "data",
            "description": "<p>课程ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: ",
          "content": "data=1",
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
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"code\": 200,\n    \"entity\": {\n        \"courseName\": \"AWERQE\",\n        \"createTime\": 1534871890000,\n        \"createUserId\": 2,\n        \"deleteStatus\": 1,\n        \"id\": 1,\n        \"status\": 1,\n        \"teacherGroupId\": 1,\n        \"updateTime\": 1534871890000,\n        \"updateUserId\": 2\n    },\n    \"message\": \"\\\"SUCCESS\\\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/Course.java",
    "groupTitle": "Course"
  },
  {
    "type": "get",
    "url": "/course/teachRecord/query",
    "title": "课程上课记录查询",
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
    "title": "课程列表",
    "description": "<p>课程列表</p>",
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
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"code\": 200,\n    \"entity\": [\n        {\n            \"courseName\": \"ceshi1\",\n            \"createTime\": 1534936246000,\n            \"createUserId\": 2,\n            \"deleteStatus\": 1,\n            \"id\": 6,\n            \"status\": 1,\n            \"teacherGroupId\": 1,\n            \"updateTime\": 1534936246000,\n            \"updateUserId\": 2\n        }\n    ],\n    \"message\": \"\\\"SUCCESS\\\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/Course.java",
    "groupTitle": "Course"
  },
  {
    "type": "get",
    "url": "/course/pageList",
    "title": "课程分页",
    "description": "<p>课程分页</p>",
    "name": "coursePageList",
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
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pageIndex",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pageSize",
            "description": "<p>页最大显示数量</p>"
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
            "type": "Object",
            "optional": true,
            "field": "entity",
            "description": "<p>查询结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.pageIndex",
            "description": "<p>页码</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.pageSize",
            "description": "<p>页最大显示数量</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.total",
            "description": "<p>结果总数</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "entity.list",
            "description": "<p>课程列表</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.list.id",
            "description": "<p>课程ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.list.courseName",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity.list.courseTitle",
            "description": "<p>课程标题</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity.list.courseDesc",
            "description": "<p>课程描述</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "entity.list.teacherGroupId",
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
            "field": "entity.list.status",
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
            "field": "entity.list.deleteStatus",
            "description": "<p>课程删除状态，1：未删除，0：删除</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "entity.list.sort",
            "description": "<p>课程排序</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"code\": 200,\n    \"entity\": {\n        \"list\": [\n            {\n                \"courseName\": \"ceshi1\",\n                \"createTime\": 1534936246000,\n                \"createUserId\": 2,\n                \"deleteStatus\": 1,\n                \"id\": 6,\n                \"status\": 1,\n                \"teacherGroupId\": 1,\n                \"updateTime\": 1534936246000,\n                \"updateUserId\": 2\n            }\n        ],\n        \"pageIndex\": 0,\n        \"pageSize\": 0,\n        \"total\": 6\n    },\n    \"message\": \"\\\"SUCCESS\\\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/Course.java",
    "groupTitle": "Course"
  },
  {
    "type": "post",
    "url": "/choiceQuestion/add",
    "title": "选择题添加",
    "description": "<p>选择题添加</p>",
    "name": "ChoiceQuestionAdd",
    "group": "Lesson",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "questionTitle",
            "description": "<p>题目</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lessonId",
            "description": "<p>课时ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": false,
            "field": "questionType",
            "description": "<p>问题类型，1：单选、2：多选</p>"
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
            "description": "<p>状态</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "analysis",
            "description": "<p>分析</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "options",
            "description": "<p>选项</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "optionsl.answerCode",
            "description": "<p>选项编号,A,B,C</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "options.answerContent",
            "description": "<p>答案内容</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "options.isCorrect",
            "description": "<p>是否正确答案，1:是</p>"
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
            "description": "<p>问题ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Question.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "get",
    "url": "/choiceQuestion/get",
    "title": "选择题详情",
    "description": "<p>选择题详情</p>",
    "name": "ChoiceQuestionGet",
    "group": "Lesson",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>题目ID</p>"
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
            "description": "<p>问题</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.id",
            "description": "<p>问题ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.questionTitle",
            "description": "<p>题目</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity.analysis",
            "description": "<p>分析</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": false,
            "field": "entity.questionType",
            "description": "<p>类型，1：单选，2：多选</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.lessonId",
            "description": "<p>所属课时ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "entity.options",
            "description": "<p>问题选项</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.options.answerCode",
            "description": "<p>选项编码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.options.answerContent",
            "description": "<p>选项内容</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "entity.options.isCorrect",
            "description": "<p>是否正确答案，1：是</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.options.sort",
            "description": "<p>选项排序</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Succcess-Example:",
          "content": "{\n    \"code\": 200,\n    \"entity\": {\n        \"createTime\": 1535039056000,\n        \"createUserId\": 1,\n        \"id\": 2,\n        \"lessonId\": 2,\n        \"options\": [\n            {\n                \"answerCode\": \"A\",\n                \"answerContent\": \"汉武帝\",\n                \"createTime\": 1535039056000,\n                \"createUserId\": 1,\n                \"id\": 1,\n                \"isCorrect\": 0,\n                \"questionId\": 2,\n                \"sort\": 1,\n                \"updateTime\": 1535039056000,\n                \"updateUserId\": 1\n            },\n            {\n                \"answerCode\": \"B\",\n                \"answerContent\": \"秦始皇\",\n                \"createTime\": 1535039056000,\n                \"createUserId\": 1,\n                \"id\": 2,\n                \"isCorrect\": 1,\n                \"questionId\": 2,\n                \"sort\": 2,\n                \"updateTime\": 1535039056000,\n                \"updateUserId\": 1\n            }\n        ],\n        \"questionTitle\": \"哪一位是开国皇帝?\",\n        \"questionType\": \"1\",\n        \"status\": 1,\n        \"updateTime\": 1535039056000,\n        \"updateUserId\": 1\n    },\n    \"message\": \"\\\"SUCCESS\\\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/Question.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "get",
    "url": "/choiceQuestion/list",
    "title": "选择题列表",
    "description": "<p>选择题列表</p>",
    "name": "ChoiceQuestionList",
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
            "description": "<p>问题</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.id",
            "description": "<p>问题ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.questionTitle",
            "description": "<p>题目</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity.analysis",
            "description": "<p>分析</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": false,
            "field": "entity.questionType",
            "description": "<p>类型，1：单选，2：多选</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.lessonId",
            "description": "<p>所属课时ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Succcess-Example:",
          "content": "{\n    \"code\": 200,\n    \"entity\": [\n        {\n            \"createTime\": 1535039056000,\n            \"createUserId\": 1,\n            \"id\": 2,\n            \"lessonId\": 2,\n            \"questionTitle\": \"哪一位是开国皇帝?\",\n            \"questionType\": \"1\",\n            \"status\": 1,\n            \"updateTime\": 1535039056000,\n            \"updateUserId\": 1\n        }\n    ],\n    \"message\": \"\\\"SUCCESS\\\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/Question.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "post",
    "url": "/choiceQuestion/modify",
    "title": "选择题修改",
    "description": "<p>选择题修改</p>",
    "name": "ChoiceQuestionModify",
    "group": "Lesson",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>问题ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "questionTitle",
            "description": "<p>题目</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lessonId",
            "description": "<p>课时ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": false,
            "field": "questionType",
            "description": "<p>问题类型，1：单选、2：多选</p>"
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
            "description": "<p>状态</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "analysis",
            "description": "<p>分析</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "options",
            "description": "<p>选项</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "optionsl.answerCode",
            "description": "<p>选项编号,A,B,C</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "options.answerContent",
            "description": "<p>答案内容</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "options.isCorrect",
            "description": "<p>是否正确答案，1:是</p>"
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
            "description": "<p>问题ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Question.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "get",
    "url": "/choiceQuestion/pageList",
    "title": "选择题分页",
    "description": "<p>选择题分页</p>",
    "name": "ChoiceQuestionPageList",
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
            "optional": false,
            "field": "pageIndex",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>页最大结果数量</p>"
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
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.pageIndex",
            "description": "<p>页码</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.pageSize",
            "description": "<p>页最大结果数量</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.total",
            "description": "<p>总结果数量</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "entity.list",
            "description": "<p>问题列表</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.list.id",
            "description": "<p>问题ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.list.questionTitle",
            "description": "<p>题目</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity.list.analysis",
            "description": "<p>分析</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": false,
            "field": "entity.list.questionType",
            "description": "<p>类型，1：单选，2：多选</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.list.lessonId",
            "description": "<p>所属课时ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Succcess-Example:",
          "content": "{\n    \"code\": 200,\n    \"entity\": {\n        \"list\": [\n            {\n                \"createTime\": 1535039056000,\n                \"createUserId\": 1,\n                \"id\": 2,\n                \"lessonId\": 2,\n                \"questionTitle\": \"哪一位是开国皇帝?\",\n                \"questionType\": \"1\",\n                \"status\": 1,\n                \"updateTime\": 1535039056000,\n                \"updateUserId\": 1\n            }\n        ],\n        \"pageIndex\": 0,\n        \"pageSize\": 0,\n        \"total\": 1\n    },\n    \"message\": \"\\\"SUCCESS\\\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/Question.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "post",
    "url": "/choiceQuestion/resetSort/edit",
    "title": "选择题顺序调整",
    "description": "<p>选择题顺序调整</p>",
    "name": "ChoiceQuestionResetSort",
    "group": "Lesson",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "data",
            "description": "<p>问题ID列表，按问题顺序排列</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "[3, 2]",
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
            "description": "<p>问题</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Succcess-Example:",
          "content": "{\n    \"code\": 200,\n    \"entity\": \"[3, 2]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/Question.java",
    "groupTitle": "Lesson"
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
            "type": "Object[]",
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
            "type": "Object[]",
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
    "url": "/documentQuestion/add",
    "title": "附件题添加",
    "description": "<p>附件题添加</p>",
    "name": "DocumentQuestionAdd",
    "group": "Lesson",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lessonId",
            "description": "<p>课时</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "title",
            "description": "<p>题目内容</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "attachments",
            "description": "<p>附件列表</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "attachments.fileName",
            "description": "<p>附件文件名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "attachments.fileLocalPath",
            "description": "<p>附件文件路径</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n\t\"lessonId\": 2,\n\t\"attachments\": [\n\t\t{\n\t        \"fileName\": \"test-file.txt\",\n\t        \"fileLocalPath\": \"877b33030f0248beb9c35fa59dad4a8d.txt\"\n\t\t}\n\t]\n}",
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
            "description": "<p>新增题ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Succcess-Example:",
          "content": "{\n    \"code\": 200,\n    \"entity\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/DocumentQuestion.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "post",
    "url": "/documentQuestion/deletes",
    "title": "附件题删除",
    "description": "<p>附件题删除</p>",
    "name": "DocumentQuestionDeletes",
    "group": "Lesson",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "id",
            "description": "<p>题目ID列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
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
            "type": "String",
            "optional": true,
            "field": "entity",
            "description": "<p>删除题目ID列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Succcess-Example:",
          "content": "[1, 2, 3]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/DocumentQuestion.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "get",
    "url": "/documentQuestion/list",
    "title": "附件题列表",
    "description": "<p>附件题列表</p>",
    "name": "DocumentQuestionList",
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
            "description": "<p>题目列表</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.id",
            "description": "<p>题目ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity.title",
            "description": "<p>题目标题</p>"
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
            "type": "Number",
            "optional": false,
            "field": "entity.sort",
            "description": "<p>排序</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.createTime",
            "description": "<p>创建时间时间戳</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "entity.attachments",
            "description": "<p>附件列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.attachments.fileName",
            "description": "<p>文件名</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.attachments.fileSize",
            "description": "<p>文件大小，单位byte</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.attachments.fileType",
            "description": "<p>文件类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.attachments.fileUrl",
            "description": "<p>访问路径</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.attachments.sort",
            "description": "<p>附件排序</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Succcess-Example:",
          "content": "{\n    \"code\": 200,\n    \"entity\": [\n        {\n            \"attachments\": [\n                {\n                    \"createTime\": 1535482993000,\n                    \"exerciseId\": 1,\n                    \"exerciseType\": 3,\n                    \"fileLocalPath\": \"\\\\other\\\\877b33030f0248beb9c35fa59dad4a8d_1535454193581_Wehe.txt\",\n                    \"fileName\": \"test-file.txt\",\n                    \"fileSize\": 59904,\n                    \"fileType\": \"other\",\n                    \"fileUrl\": \"/other/877b33030f0248beb9c35fa59dad4a8d_1535454193581_Wehe.txt\",\n                    \"id\": 12,\n                    \"sort\": 1\n                }\n            ],\n            \"createTime\": 1535482993000,\n            \"createUserId\": 2,\n            \"id\": 1,\n            \"lessonId\": 2,\n            \"sort\": 1,\n            \"updateTime\": 1535482993000,\n            \"updateUserId\": 2\n        }\n    ],\n    \"message\": \"\\\"SUCCESS\\\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/DocumentQuestion.java",
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
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n\t\"lessonId\": \"2\",\n\t\"assignmentName\": \"一战影响\",\n\t\"attachments\": [\n\t\t{\n\t\t\t\"fileName\": \"readme.doc\",\n\t\t\t\"fileLocalPath\": \"2d7f6451c7a04a9a8e970216694edd00.doc\"\n\t\t}\t\n\t]\n}",
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
    "url": "/lessonAssignment/deletes",
    "title": "课堂作业删除",
    "description": "<p>课堂作业删除</p>",
    "name": "LessonAssignmentDelete",
    "group": "Lesson",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "data",
            "description": "<p>课堂作业ID列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
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
            "description": "<p>删除课堂作业ID</p>"
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
    "title": "课堂作业修改",
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
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n\t\"id\": 2,\n\t\"lessonId\": \"2\",\n\t\"assignmentName\": \"一战发起国\",\n\t\"attachments\": [\n\t\t{\n\t\t\t\"fileName\": \"haha哈哈ha.doc\",\n\t\t\t\"fileLocalPath\": \"b82986854a5a4d72ad5893e9ab012e38.doc\"\n\t\t}\t\n\t]\n}",
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
            "type": "Number",
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
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"code\": 200,\n    \"entity\": {\n        \"assignmentName\": \"一战影响\",\n        \"attachments\": [\n            {\n                \"createTime\": 1535044930000,\n                \"exerciseId\": 2,\n                \"exerciseType\": 2,\n                \"fileLocalPath\": \"\\\\word\\\\2d7f6451c7a04a9a8e970216694edd00_1535016128693_G95M.doc\",\n                \"fileName\": \"readme.doc\",\n                \"fileSize\": 61952,\n                \"fileType\": \"word\",\n                \"fileUrl\": \"/word/2d7f6451c7a04a9a8e970216694edd00_1535016128693_G95M.doc\",\n                \"id\": 17,\n                \"sort\": 1\n            }\n        ],\n        \"createTime\": 1535044930000,\n        \"createUserId\": 1,\n        \"id\": 2,\n        \"lessonId\": 2,\n        \"sort\": 2,\n        \"status\": 1,\n        \"updateTime\": 1535044930000,\n        \"updateUserId\": 1\n    },\n    \"message\": \"\\\"SUCCESS\\\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/LessonAssignment.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "get",
    "url": "/lessonAssignment/list",
    "title": "课堂作业列表",
    "description": "<p>课堂作业列表</p>",
    "name": "LessonAssignmentList",
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
            "description": "<p>状态</p>"
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
            "description": "<p>响应结果</p>"
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
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"code\": 200,\n    \"entity\": [\n        {\n            \"assignmentName\": \"一战影响\",\n            \"createTime\": 1535044973000,\n            \"createUserId\": 1,\n            \"id\": 3,\n            \"lessonId\": 2,\n            \"sort\": 3,\n            \"status\": 1,\n            \"updateTime\": 1535044973000,\n            \"updateUserId\": 1\n        }\n    ],\n    \"message\": \"\\\"SUCCESS\\\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/LessonAssignment.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "get",
    "url": "/lessonAssignment/pageList",
    "title": "课堂作业分页",
    "description": "<p>课堂作业分页</p>",
    "name": "LessonAssignmentPageList",
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
            "description": "<p>状态</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageIndex",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>页最大结果数量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "lessonId=2&pageIndex=2&pageSize=2",
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
            "description": "<p>响应结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.pageIndex",
            "description": "<p>页码</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.pageSize",
            "description": "<p>页最大结果数量</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.total",
            "description": "<p>总结果数量</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "entity.list",
            "description": "<p>作业列表</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "entity.list.lessonId",
            "description": "<p>课时ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity.list.assignmentName",
            "description": "<p>作业标题</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"code\": 200,\n    \"entity\": {\n        \"list\": [\n            {\n                \"assignmentName\": \"一战影响\",\n                \"createTime\": 1535044973000,\n                \"createUserId\": 1,\n                \"id\": 3,\n                \"lessonId\": 2,\n                \"sort\": 3,\n                \"status\": 1,\n                \"updateTime\": 1535044973000,\n                \"updateUserId\": 1\n            }\n        ],\n        \"pageIndex\": 0,\n        \"pageSize\": 0,\n        \"total\": 3\n    },\n    \"message\": \"\\\"SUCCESS\\\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/LessonAssignment.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "post",
    "url": "/lessonMaterial/copyTo/edit",
    "title": "课件资料复制",
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
            "description": "<p>复制目标课时ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "lessonMaterialIds",
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
            "description": "<p>复制目标课时ID</p>"
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
    "url": "/questionAnswer/submitHistory/query",
    "title": "答题记录查询",
    "description": "<p>答题记录查询</p>",
    "name": "QuestionAnserHistoryQuery",
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
            "optional": false,
            "field": "questionType",
            "description": "<p>问题类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "studentId",
            "description": "<p>答题学生ID</p>"
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
            "type": "Object",
            "optional": true,
            "field": "entity",
            "description": "<p>答题记录</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.studentNumber",
            "description": "<p>上课学生总数</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "entity.questionAnswerRecordVos",
            "description": "<p>答题记录列表</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.questionAnswerRecordVos.id",
            "description": "<p>答题记录ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.questionAnswerRecordVos.questionId",
            "description": "<p>问题ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.questionAnswerRecordVos.questionType",
            "description": "<p>问题类型</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.questionAnswerRecordVos.studentId",
            "description": "<p>答题学生ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.questionAnswerRecordVos.studentName",
            "description": "<p>答题学生姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.questionAnswerRecordVos.studentClassRecordId",
            "description": "<p>答题学生上课记录ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.questionAnswerRecordVos.answerContent",
            "description": "<p>答题内容</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "entity.questionAnswerRecordVos.isSubmit",
            "description": "<p>是否已提交</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.questionAnswerRecordVos.updateTime",
            "description": "<p>答案提交时间（时间戳）</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Question.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "post",
    "url": "/questionAnswer/submit/edit",
    "title": "提交问题答案",
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
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "attachments",
            "description": "<p>附件列表</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "attachments.fileName",
            "description": "<p>附件名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "attachments.fileLocalPath",
            "description": "<p>附件路径</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{",
          "content": "{\n\t\"questionId\": 1,\n\t\"questionType\": 6,\n\t\"answerContent\": \"\",\n\t\"isSubmit\": 1,\n\t\"attachments\": [\n\t{\n\t\t\"fileLocalPath\": \"877b33030f0248beb9c35fa59dad4a8d.txt\",\n\t\t\"fileName\": \"ans.txt\"\n\t}\n\t]\n}",
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
            "type": "Number",
            "optional": true,
            "field": "entity",
            "description": "<p>答题记录ID</p> <p>{ &quot;code&quot;: 200, &quot;entity&quot;: &quot;1&quot; }</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/QuestionAnswerSubmit.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "get",
    "url": "/lesson/detail/query",
    "title": "课时详情查询",
    "name": "______",
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
            "field": "lessonCode",
            "description": "<p>课时上课code，与lessonId二选一，同时传递时lessonId优先</p>"
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
    "url": "/lesson/deletes",
    "title": "课时删除",
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
    "title": "课时编辑",
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
    "type": "get",
    "url": "/lesson/list",
    "title": "课时列表",
    "description": "<p>课时列表</p>",
    "name": "lessonList",
    "group": "Lesson",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lessonName",
            "description": "<p>课时名称（模糊匹配）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "courseId",
            "description": "<p>课程ID</p>"
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
            "description": "<p>课时状态，1:启用，0:禁用</p>"
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
          "content": "courseId=1&lessonName=name",
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
            "description": "<p>课时ID</p>"
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
            "field": "entity.lessonName",
            "description": "<p>课时名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity.lessonDesc",
            "description": "<p>课时简介</p>"
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
            "description": "<p>课时状态，1：启用，0：禁用</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "entity.deleteStatus",
            "description": "<p>删除状态，1：未删除</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.createTime",
            "description": "<p>课时创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.updateTime",
            "description": "<p>课时更新时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"code\": 200,\n    \"entity\": [\n        {\n            \"courseId\": 1,\n            \"createTime\": 1534936024000,\n            \"createUserId\": 2,\n            \"deleteStatus\": 1,\n            \"id\": 5,\n            \"lessonName\": \"lesson a name\",\n            \"status\": 1,\n            \"teacherGroupId\": 1,\n            \"updateTime\": 1534936024000,\n            \"updateUserId\": 2\n        }\n    ],\n    \"message\": \"\\\"SUCCESS\\\"\"\n}",
          "type": "json"
        }
      ]
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
    "title": "课时资料删除",
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
    "type": "get",
    "url": "/lesson/pageList",
    "title": "课时分页",
    "description": "<p>课时分页</p>",
    "name": "lessonPageList",
    "group": "Lesson",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "lessonName",
            "description": "<p>课时名称（模糊匹配）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "courseId",
            "description": "<p>课程ID</p>"
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
            "description": "<p>课时状态，1:启用，0:禁用</p>"
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
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>页最大数量</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageIndex",
            "description": "<p>页码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: ",
          "content": "courseId=1&lessonName=name",
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
            "description": "<p>课程信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.total",
            "description": "<p>结果总数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.pageSize",
            "description": "<p>页最大数量</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.pageIndex",
            "description": "<p>页码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "entity.list",
            "description": "<p>课时列表</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.list.id",
            "description": "<p>课时ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.list.courseId",
            "description": "<p>课程ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.list.lessonName",
            "description": "<p>课时名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "entity.list.lessonDesc",
            "description": "<p>课时简介</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "entity.list.status",
            "description": "<p>课时状态，1：启用，0：禁用</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "entity.list.deleteStatus",
            "description": "<p>删除状态，1：未删除</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.list.createTime",
            "description": "<p>课时创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.list.updateTime",
            "description": "<p>课时更新时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\n    \"code\": 200,\n    \"entity\": {\n        \"list\": [\n            {\n                \"courseId\": 1,\n                \"createTime\": 1534936024000,\n                \"createUserId\": 2,\n                \"deleteStatus\": 1,\n                \"id\": 5,\n                \"lessonName\": \"lesson a name\",\n                \"status\": 1,\n                \"teacherGroupId\": 1,\n                \"updateTime\": 1534936024000,\n                \"updateUserId\": 2\n            }\n        ],\n        \"pageIndex\": 0,\n        \"pageSize\": 0,\n        \"total\": 1\n    },\n    \"message\": \"\\\"SUCCESS\\\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/Lesson.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "post",
    "url": "/lesson/add",
    "title": "课时创建",
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
    "type": "get",
    "url": "/teacherClassRecord/list",
    "title": "上课记录列表",
    "description": "<p>上课记录列表</p>",
    "name": "teacherClassRecordList",
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
            "optional": true,
            "field": "startTime",
            "description": "<p>起始时间，格式2018-09-03 12:00:00</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "endTime",
            "description": "<p>结束时间，格式2018-09-03 12:00:00</p>"
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
            "description": "<p>上课记录列表</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.id",
            "description": "<p>记录ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.teacherId",
            "description": "<p>教师ID</p>"
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
            "type": "Number",
            "optional": false,
            "field": "entity.startTime",
            "description": "<p>开始时间（时间戳）</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.endTime",
            "description": "<p>结束时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.lessonCode",
            "description": "<p>上课lessonCode</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.teacherName",
            "description": "<p>教师姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.teacherNo",
            "description": "<p>教师编码</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/TeacherClassRecord.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "post",
    "url": "/teching/end/edit",
    "title": "教师下课",
    "description": "<p>教师下课</p>",
    "name": "teacherTeachingEnd",
    "group": "Lesson",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lessonCode",
            "description": "<p>课时上课code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: ",
          "content": "{\"lessonCode\": \"ABCD\"}",
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
            "description": "<p>课时上课code</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Teacher.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "post",
    "url": "/teching/start/edit",
    "title": "教师上课",
    "description": "<p>教师上课，如果课时下存在教师未下课的记录，则继续上次的上课，否则新增一条上课记录</p>",
    "name": "teacherTeachingStart",
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
          "content": "{\"lessonId\": 1}",
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
            "description": "<p>课时上课code(学生凭此code登录系统)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Teacher.java",
    "groupTitle": "Lesson"
  },
  {
    "type": "get",
    "url": "/studentClassRecord/list",
    "title": "学生上课记录列表",
    "description": "<p>学生上课记录列表</p>",
    "name": "StudentClassRecordList",
    "group": "Student",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lessonCode",
            "description": "<p>课时code</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "studentId",
            "description": "<p>学生ID，教师可以查询特定学生的记录</p>"
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
            "description": "<p>结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.id",
            "description": "<p>记录ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.studentId",
            "description": "<p>上课学生ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.teacherRecordId",
            "description": "<p>上课教师</p>"
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
            "field": "entity.lessonCode",
            "description": "<p>课时上课code</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.startTime",
            "description": "<p>学生上课时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "entity.endTime",
            "description": "<p>学生下课时间</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/StudentClassRecord.java",
    "groupTitle": "Student"
  },
  {
    "type": "post",
    "url": "/student/import/edit",
    "title": "学生数据导入",
    "description": "<p>学生数据导入</p>",
    "name": "StudentDataImport",
    "group": "Student",
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
            "description": "<p>如果导入数据学生编号重复，如何处理(override不传：返回错误，true: 覆盖， false: 丢弃)</p>"
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
            "description": "<p>学生编号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\"code\": 200, \"entity\": \"['0001','0002','0003']\", \"message\": \"success\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/DataImport.java",
    "groupTitle": "Student"
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
            "description": "<p>教师编码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Example:",
          "content": "{\"code\": 200, \"entity\": \"['0001','0002','0003']\", \"message\": \"success\"}",
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
    "url": "/feedback/add",
    "title": "意见反馈添加",
    "description": "<p>意见反馈添加</p>",
    "name": "FeedbackAdd",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "replyId",
            "description": "<p>回复反馈ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "attachments",
            "description": "<p>附件</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "attachments.fileName",
            "description": "<p>附件名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "attachments.fileLocalPath",
            "description": "<p>附件路径</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\n\t\"content\": \"I like green\",\n\t\"attachments\": [\n\t\t{\n\t\t\t\"fileName\": \"red.gif\",\n\t\t\t\"fileLocalPath\": \"d207d00f7b0246679c5ffe9e37d3f8d1.gif\"\n\t\t},\n\t\t{\n\t\t\t\"fileName\": \"yellow.gif\",\n\t\t\t\"fileLocalPath\": \"d207d00f7b0246679c5ffe9e37d3f8d1.gif\"\n\t\t},\n\t\t{\n\t\t\t\"fileName\": \"green.gif\",\n\t\t\t\"fileLocalPath\": \"d207d00f7b0246679c5ffe9e37d3f8d1.gif\"\n\t\t}\n\t]\n}",
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
            "description": "<p>新增ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Succcess-Example:",
          "content": "{\n    \"code\": 200,\n    \"entity\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/Feedback.java",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/feedback/deletes",
    "title": "意见反馈删除",
    "description": "<p>意见反馈删除</p>",
    "name": "FeedbackDelete",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "id",
            "description": "<p>意见反馈ID列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "[1, 3]",
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
            "description": "<p>删除ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Succcess-Example:",
          "content": "{\n    \"code\": 200,\n    \"entity\": \"[1, 3]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/Feedback.java",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/feedback/list",
    "title": "意见反馈列表",
    "description": "<p>意见反馈列表</p>",
    "name": "FeedbackList",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "replyStatus",
            "description": "<p>是否有回复，1：是</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>反馈起始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>反馈结束时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "replyStatus=1&startTime=2018-08-01%2010:01:01&endTime=2018-09-30%2012:01:01",
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
            "type": "Object[]",
            "optional": true,
            "field": "entity",
            "description": "<p>反馈列表</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.replyId",
            "description": "<p>回复意见ID（非回复为-1）</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.replyStatus",
            "description": "<p>是否有回复，1：是</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.userId",
            "description": "<p>反馈用户ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.userName",
            "description": "<p>反馈用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.content",
            "description": "<p>反馈内容</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Succcess-Example:",
          "content": "{\n    \"code\": 200,\n    \"entity\": [\n        {\n            \"content\": \"Whice color is you like\",\n            \"createTime\": 1535553155000,\n            \"createUserId\": 2,\n            \"deleteStatus\": 1,\n            \"id\": 6,\n            \"replyId\": -1,\n            \"replyStatus\": 1,\n            \"rootId\": 6,\n            \"updateTime\": 1535553664000,\n            \"updateUserId\": 2,\n            \"userId\": 2,\n            \"userName\": \"teacher\"\n        }\n    ],\n    \"message\": \"\\\"SUCCESS\\\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/Feedback.java",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/feedback/list",
    "title": "意见反馈列表",
    "description": "<p>意见反馈列表</p>",
    "name": "FeedbackList",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "0",
              "1"
            ],
            "optional": false,
            "field": "replyStatus",
            "description": "<p>是否有回复，1：是</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>反馈起始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>反馈结束时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageIndex",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>页最大展示数量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "replyStatus=1&startTime=2018-08-01%2010:01:01&endTime=2018-09-30%2012:01:01",
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
            "description": "<p>结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.total",
            "description": "<p>总结果数量</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.pageIndex",
            "description": "<p>页码</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.pageSize",
            "description": "<p>页最大展示数量</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "entity.list",
            "description": "<p>反馈列表</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.list.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.list.replyId",
            "description": "<p>回复意见ID（非回复为-1）</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.list.replyStatus",
            "description": "<p>是否有回复，1：是</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.list.userId",
            "description": "<p>反馈用户ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.list.userName",
            "description": "<p>反馈用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.list.content",
            "description": "<p>反馈内容</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Succcess-Example:",
          "content": "{\n    \"code\": 200,\n    \"entity\": {\n        \"list\": [\n            {\n                \"content\": \"Whice color is you like\",\n                \"createTime\": 1535553155000,\n                \"createUserId\": 2,\n                \"deleteStatus\": 1,\n                \"id\": 6,\n                \"replyId\": -1,\n                \"replyStatus\": 1,\n                \"rootId\": 6,\n                \"updateTime\": 1535553664000,\n                \"updateUserId\": 2,\n                \"userId\": 2,\n                \"userName\": \"teacher\"\n            }\n        ],\n        \"pageIndex\": 0,\n        \"pageSize\": 0,\n        \"total\": 1\n    },\n    \"message\": \"\\\"SUCCESS\\\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/Feedback.java",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/feedback/reply/query",
    "title": "意见反馈及回复查询",
    "description": "<p>意见反馈及回复查询</p>",
    "name": "FeedbackReplyQuery",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rootId",
            "description": "<p>根反馈ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageIndex",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>页最大展示数量</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "rootId=6",
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
            "description": "<p>结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.total",
            "description": "<p>总结果数量</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.pageIndex",
            "description": "<p>页码</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.pageSize",
            "description": "<p>页最大展示数量</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "entity.list",
            "description": "<p>反馈列表</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.list.id",
            "description": "<p>ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.list.replyId",
            "description": "<p>回复意见ID（非回复为-1）</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.list.replyStatus",
            "description": "<p>是否有回复，1：是</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.list.userId",
            "description": "<p>反馈用户ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.list.userName",
            "description": "<p>反馈用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.list.content",
            "description": "<p>反馈内容</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "entity.list.attachments",
            "description": "<p>附件</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.list.attachments.fileName",
            "description": "<p>附件名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.list.attachments.fileUrl",
            "description": "<p>附件访问路径</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.list.attachments.fileSize",
            "description": "<p>附件大小</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "entity.list.attachments.fileType",
            "description": "<p>附件类型</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "entity.list.attachments.sort",
            "description": "<p>附件排序</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Succcess-Example:",
          "content": "{\n    \"code\": 200,\n    \"entity\": {\n        \"list\": [\n            {\n                \"attachments\": [\n                    {\n                        \"createTime\": 1535553155000,\n                        \"exerciseId\": 6,\n                        \"exerciseType\": 200,\n                        \"fileLocalPath\": \"\\\\image\\\\d207d00f7b0246679c5ffe9e37d3f8d1_1535524355162_yzMq.gif\",\n                        \"fileName\": \"red.gif\",\n                        \"fileSize\": 2747952,\n                        \"fileType\": \"image\",\n                        \"fileUrl\": \"/image/d207d00f7b0246679c5ffe9e37d3f8d1_1535524355162_yzMq.gif\",\n                        \"id\": 14,\n                        \"sort\": 1\n                    }\n                ],\n                \"content\": \"Whice color is you like\",\n                \"createTime\": 1535553155000,\n                \"createUserId\": 2,\n                \"deleteStatus\": 1,\n                \"id\": 6,\n                \"replyId\": -1,\n                \"replyStatus\": 1,\n                \"rootId\": 6,\n                \"updateTime\": 1535553664000,\n                \"updateUserId\": 2,\n                \"userId\": 2,\n                \"userName\": \"teacher\"\n            },\n            {\n                \"content\": \"I like green\",\n                \"createTime\": 1535553201000,\n                \"createUserId\": 2,\n                \"deleteStatus\": 1,\n                \"id\": 7,\n                \"replyId\": 6,\n                \"replyStatus\": 1,\n                \"rootId\": 6,\n                \"updateTime\": 1535553664000,\n                \"updateUserId\": 2,\n                \"userId\": 2,\n                \"userName\": \"teacher\"\n            },\n            {\n                \"content\": \"Ok\",\n                \"createTime\": 1535553219000,\n                \"createUserId\": 2,\n                \"deleteStatus\": 1,\n                \"id\": 8,\n                \"replyId\": 7,\n                \"replyStatus\": 0,\n                \"rootId\": 6,\n                \"updateTime\": 1535553664000,\n                \"updateUserId\": 2,\n                \"userId\": 2,\n                \"userName\": \"teacher\"\n            }\n        ],\n        \"pageIndex\": 0,\n        \"pageSize\": 0,\n        \"total\": 3\n    },\n    \"message\": \"\\\"SUCCESS\\\"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/Feedback.java",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/updatePassword",
    "title": "修改密码",
    "name": "____",
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
    "url": "/user/resetPassword/edit",
    "title": "用户密码重置",
    "name": "______",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "userIds",
            "description": "<p>重置密码用户ID列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Param-Example:",
          "content": "{\"userIds\": [1,2,3]}",
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
            "field": "entity",
            "description": "<p>重置密码用户ID列表</p>"
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
          "content": "{\n    \"code\": 200,\n    \"entity\": \"[1]\"\n}",
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
