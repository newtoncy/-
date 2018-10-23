# C/C++随手记

[TOC]

##文件操作

###C文件操作（放弃吧。。）

- fseek(fp,offset,SEEK_SET|SEEK_END|SEEK_CUR)

- fwrite(&buff,ElementSize,ElementCount,fp)

- fread(buff,ElementSize,ElementCount,fp)

- [io.h] access(path,mod) 判断权限

  mod可能的取值为

  - 0 存在
  - 2 读
  - 4写
  - 6执行

###C++文件操作

fstream

- open(文件名,模式)

  模式位于命名空间ios,

  - app 每次写入都定位到文件流最末尾
  - in 使得可以读
  - out 使得可以写入,会将文件清空
  - 如果 in|out一起用,则不会清空文件
  - binary二进制模式(不知道有什么区别)

- !运算符

  此运算符被重载了,如果打开失败则此运算符返回true,也可以用is_open函数

- 状态判断

  bad()出错

  fail()格式出错,比如应该是整数却读出来字母

  eof()如果读文件到达文件末尾则返回true(似乎如果刚好读到文件末尾,要再调用一次读文件才会使它变成true)

  good()以上任一函数返回true,则此函数返回false

  **clear()**清除所有状态标志

- flush()

  刷新缓存,会将缓存全部写入磁盘再继续.endl也有这个作用,不同的是endl会换行

- 输出的格式化

  太难用了,还是用sprintf好了 [cout格式化的方法](https://arachnoid.com/cpptutor/student3.html) 

- 二进制读写相关

  - tellp()获得输出流当前在文件中的偏移量

  - tellg()

  - seekp()

  - seekg()

  - read(buffer,size)

    例如read((char*)(&node),sizeof(node))

  - write(buffer,size)

- 重载<<与>>

  [重载<<与>>](https://www.cnblogs.com/yangguang-it/p/6489550.html) 需要用到[友元函数](https://blog.csdn.net/qq_26337701/article/details/53996104) 

  

​    

## 字符串

### C风格

- int atoi( const char *str ); 

- long atol( const char *str ); 

- <string.h > int memcmp( const void *buffer1, const void *buffer2, size_t count );

  功能：函数比较buffer1 和 buffer2的前count 个字符。

- <string.h > void *memcpy( void *to, const void *from, size_t count ); 

  **注意，当from与to相同时，不能用memcpy，要用memmove**

- void *memset( void *buffer, int ch, size_t count ); 

- - strcat  连接 

  - strchr(str,ch) 搜索 ,返回位置
  - strcmp比较
  - strcpy (to,from)复制
  - strlen 长度

- sprintf(*字符串,格式,....)

### C++风格

string类

- \+ > < = 有重载

- c_str()获取一个C语言的字符串指针

- substr(a[,b])相当于slice，从a到b切分出来

- 迭代器string::iterator

- insert

  - insert(pos,str)

  - insert(pos,str,a,n)

  - insert(it,str.ita,str.itb)

    在it所指的位置插入另一个字符串的[ita,itb)

  - insert(pos,n,ch)

  - insert(it,n,ch)

- erase删除

  - erase(pos,n)
  - erase(it)删除迭代器指向的字符
  - erase(ita,itb)删除迭代器范围内的字符

- append

  与insert用法类似，只是没有第一个表示位置的参数

- replace

  replace(pos,n,str2),替换n个,相当于在pos处删除n个然后插入str2

  pos可以用迭代器替换

  replace(pos,n,str2,pos2,n2)一看就知道,相当于replace(pos,n,str.substr(pos2,n2))

  后面三个参数也可以用迭代器替换

- find（str）

  返回位置，失败-1

- 转换

  tostring（var）

  stoi（str,pos,基数）

##utility

### Pair<T1,T2>

结构体内

- T1 first

- T2 second

- 构造函数

  pair() pair(T1 a,T2 b) pair(pair<U,V> p)

std命名空间内

- 重载的比较运算符..第一个元素的优先级高于第二个
- make_pair(a,b)



## STL

###容器

####vector

本质上是一个动态调整大小的数组..当大小当大小不够时会把原数据复制到更大的一块内存中..显然,他的随机访问性能优越,但是增加和删除相当糟糕

- iterator

  begin() end() rbegin() rend()**end不指向任何元素,元素的范围是[begin,end)**

- capacity() 当前的大小（含预留）

  size() 当前的大小（已用）

  max_size() 可以的最大大小

  resize() 指定大小（不会改变分配的总的大小）

  reserve()指定最小大小（含预留）

  **一个骚气的操作，压缩：vector \<int> (q).swap(q);这样可以把q压缩**

  empty() 是否为空

- 元素访问

  front()返回第一个,back()返回最后一个

- 修改

  swap(x)交换此元素与x...并非通过复制,而是通过交换指针实现的

  insert

  - 单个元素 iterator insert(iterator position,const value_type& val)
  - 填充 void insert(iterator position,size_type n,const value_type& val)
  - 范围 void insert(iterator position,inputIterator first,inputIterator last)

  erase

  - erase(迭代器)
  - erase(迭代器,迭代器)

  push_back(x)

  pop_back(x)

####list

本质上是一个双向链表

- 构造函数

  默认： list(allocator)//内存分配对象。。不知道是啥

  填充：list(n,val)

  范围：list(first,end)//两个迭代器

  复制：list(list)

- 赋值：拷贝并分配合适的大小

- 大小：

  empty()

  size()

  max_size()

- 访问

  front() back()

- 修改

  - push_front() push_back() pop_front() pop_front()
  - clear()
  - swap()
  - insert() erase()//与vactor的用法相同

- 运算

  - sort() sort(function comp) 函数comp含两个参数,返回bool值,第一个参数应该排在第二个之前true,否则false
  - merge() 合并

#### deque

双向的队列用的是一个分段连续的内存空间,能够快速的在头部和尾部插入和删除

允许随机访问..

- 修改

  - push_front() push_back() pop_front() pop_front()
  - clear()
  - swap()
  - insert() erase()//与vactor的用法相同

#### map

使用红黑树实现的类似python字典的一个东西

- 构造函数

  默认,范围

- operator [key]

  返回值的引用,如果键不存在则将创建

- insert( const value_type& value ) 

  value_type是Pair模板实例的

- erase(key)

#### multimap

- find(key) 返回迭代器
- erase(key) 或 erase(迭代器) c++11
- size_type count(key) 返回有多少个重名的键
- pair<iterator,iterator> equal_range(key) 返回相等键的范围
- lower_bound(key) upper_bound(key) 一个返回下界一个返回上界

####set

与map差不多,,find找不到则返回end()

### 算法

- min_element(first,end) max_element(,) 返回一个迭代器
- sort(,)
- find(first,end,value)
- reverse(first,end) 反转
- equal(first1,end1,first2)
- 

