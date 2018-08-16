define({ "api": [
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
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:5000/login"
      }
    ]
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
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:5000/logout"
      }
    ]
  }
] });
