# python常用知识速查

[TOC]

## 字典

- 增

  直接给新的键赋值

- 删

  dict.pop('key')

- 查

  'key ' in dict

  dict['key']

- 改

  略

- 遍历

  for key in dict:

  for value in dict.values():

  for key,value in dict.items():

- 更新

  dict.update(res)

## 集合

- 增

  set.add(e)

- 删

  set.remove(e) #元素不存在报错

  set.discard(e) #元素不存在不报错

- 查

  e in set

- 更新

  set.update()

- 运算

  交 &

  并 |

  差 -

  子集，超集 <= , >=

  set.isdisjoint() 是否无交集

## 列表

- 操作

  增:list.append()

  list.insert(index,obj) #在index处插入

  删:

  list.pop()

  del a[3]

  del a[1:3] 

  查:list.index()

## 字符串

- string.find(sub [,start [,end]]) 

  查找字符串出现的位置，没找到返回None。有人说是-1？

- string.index(sub [,start [,end]]) 

  同上，没找到则异常

- string.split([sep [,maxsplit]]) 

  用指定分隔符分割

- string.join(iterable) 

  用指定分割符分割

- str.strip([chars]);

  从一个字符串中去掉另一个字符串中的所有字符

##全局函数

- hash(obj) 返回不可变对象hash值
- dir(obj) 查看对象的所有字段
- abs() max() min()
- round(值,几位) 保留几位小数
- len(obj) 长度
- zip(a,b) 逐一配对

## 类型判断

isinstanceof(对象,类)

type(对象)==类

## 对象拷贝

import copy

copy.copy(对象)

copy.deepcopy(对象)