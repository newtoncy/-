# opencv

[TOC]

## Mat

mat的复制构造函数只复制指针。不会拷贝图像的内容。

可以通过.clone()和.copyTo()来复制

- 基本属性

  rows,cols,channels(),depth()

  ```
  enum{CV_8U=0,CV_8S=1,CV_16U=2,CV_16S=3,CV_32S=4,CV_32F=5,CV_64F=6} 
  ```

- 创建mat对象

  ```C++
  Mat M(2,2, CV_8UC3, Scalar(0,0,255));
  ```

  ```
  CV_[The number of bits per item][Signed or Unsigned][Type      Prefix]C[The channel number]
  ```
  ```c++
  Mat E = Mat::eye(4, 4, CV_64F);
  Mat O = Mat::ones(2, 2, CV_32F);
  Mat Z = Mat::zeros(3,3, CV_8UC1);
  ```

- 获得原图的一部分(引用)

  ```
  Mat D (A, Rect(10, 10, 100, 100) );
  ```

  

- 遍历mat中的图像

  1、指针法

  ```c++
  if (I.isContinuous())//如果连续，则视为一整行
  {
      nCols *= nRows;
      nRows = 1;         
  }
  for( i = 0; i < nRows; ++i)
  {
      p = I.ptr<uchar>(i);//获取每一行的指针
      for ( j = 0; j < nCols; ++j)
      {
          p[j] = table[p[j]];//修改图像             
      }
  }
  ```

  2、迭代器法

  ```
  const int channels = I.channels();
      switch(channels)
      {
      case 1: 
          {
              MatIterator_<uchar> it, end; 
              for( it = I.begin<uchar>(), end = I.end<uchar>(); it != end; ++it)
                  *it = table[*it];
              break;
          }
      case 3: 
          {
              MatIterator_<Vec3b> it, end; 
              for( it = I.begin<Vec3b>(), end = I.end<Vec3b>(); it != end; ++it)
              {
                  (*it)[0] = table[(*it)[0]];
                  (*it)[1] = table[(*it)[1]];
                  (*it)[2] = table[(*it)[2]];
              }
          }
      }
      
      return I; 
  }
  ```

  