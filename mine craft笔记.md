# mine craft笔记

- give 某人 某物 数量

- summon 某实体 坐标 json数据

  summon召唤掉落物/summon Item ~-2 ~ ~ {Item:{id:"stone_button",Count:1,tag:{display:{Name:"回城之石",Lore:["拿在手上","不要移动"]}}}}

- entitydata 某实体 数据标签 

- setblock 坐标 方块名 [状态值（0~15） 原方块处理方式（replace|destroy|keep） 数据标签]

  air方块用来清空,fire方块用来点燃

- title 玩家 \<title|actionbar> {text,color,etc} [我的世界中文论坛](http://www.mcbbs.net/thread-470981-1-1.html)

- tellraw 玩家 {json同上}

- /gamerule commandBlockOutput false 隐藏命令方块输出

- fill <*x1*> <*y1*> <*z1*> <*x2*> <*y2*> <*z2*> <*方块名*> [*数据|状态*][*原有方块处理方式*] [*数据标签*] 

- testfor 实体 数据标签 (据说可以用|| && !连接多个条件)

- execute 实体 执行命令的位置 执行的命令

- stats 关于执行统计



## 数据标签

### 实体

- CustomName标签,可以用来自定义名字.

### 物品

- display:{Name:"",color:"",Lore:["第一行",...]}



### 书

/give @p minecraft:written_book 1 0 {title:"wawawa",author:"asdfa",pages:["{\"text\":\"回城\",\"clickEvent\":{\"action\":\"run_command\",\"value\":\"/trigger tpbook set 0\"}}"]}

### 人

- 手持道具检测

  /testfor @a {SelectedItem:{id:"minecraft:stone_button",tag:{display:{Name:"回城之石"}}}}

## 结构方块

待看

## 权限等级

设定OP的权限等级
1 - OP可以无视重生点保护。
2 - OP可以使用单人游戏作弊命令（除了/publish，因为不能在服务器上使用，/debug也是）并使用命令方块。命令方块和领域服服主/管理员有此等级权限。
3 - OP可以使用几乎所有多人游戏限定的命令（除第4级专用命令）
4 - OP可以使用所有命令，包括/stop、/save-all、/save-on和/save-off。