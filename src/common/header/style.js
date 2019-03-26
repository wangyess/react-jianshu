import styled from 'styled-components'
import LogoImage from '../../statics/jianshu.png'
export const HeaderWrapper = styled.div`
  height:58px;
  position: relative;
  border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({href:'/'})`
  width:100px;
  height:58px;
  display:block;
  position:absolute;
  top:0;
  left:0;
  background:url(${LogoImage});
  background-size:contain;
  
`
export const Nav = styled.div`
  width:960px;
  height:100%;
  margin: 0 auto;
`
export const NavItem = styled.div`
  padding:0 15px;
  line-height:56px;
  font-size:17px;
  color:#333;
  &.left{
    float:left
  }
  &.right{
    color:#969696;
    float:right
  }
  &.active{
    color:#ea6f5a
  }
`
export const SearchInput = styled.input.attrs({
  placeholder:'搜索'
})`
  width:160px;
  height:38px;
  font-size:14px;
  background:#eee;
  border:none;
  outline:none;
  border-radius: 19px;
  margin-top:9px;
  margin-left:15px;
  padding:0 20px;
  box-sizing:border-box; 
  &.placeholder{
    color:#999
  }
`
export const Addition = styled.div`
  position:absolute;
  height:56px;
  top:0;
  right:0;
`
export const Button = styled.div`
  float:right;
  font-size:14px;
  line-height:38px;
  border:1px solid #ec6149;
  margin-top:9px;
  border-radius:19px;
  padding 0 20px;
  margin-right:20px;
  &.red{
    color:#ec6149;
  }
  &.writing{
    color:white;
    background:#ec6149;
  }
`