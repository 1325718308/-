#react native ES5和ES6写法对照
##模块
###引用
在ES5里，如果使用CommonJS标准，引入React包基本通过require进行，代码类似这样：

	ES5
	var React = require("react");
	var {
    Component,
    PropTypes
	} = React;  //引用React抽象组件

	var ReactNative = require("react-native");
	var {
    Image,
    Text,
	} = ReactNative;  //引用具体的React Native组件
在ES6里，import写法更为标准

	//ES6
	import React, { 
    Component,
    PropTypes,
	} from 'react';
	import {
    Image,
    Text
	} from 'react-native'
###导出单个类
在ES5里，要导出一个类给别的模块用，一般通过module.exports来导出

	//ES5
	var MyComponent = React.createClass({
    ...
	});
	module.exports = MyComponent;
在ES6里，通常用export default来实现相同的功能：

	//ES6
	export default class MyComponent extends Component{
    ...
	}
##定义组件
在ES5里，通常通过React.createClass来定义一个组件类，像这样：

	//ES5
	var Photo = React.createClass({
    render: function() {
        return (
            <Image source={this.props.source} />
        );
    },
	});
在ES6里，我们通过定义一个继承自React.Component的class来定义一个组件类，像这样：

	//ES6
	class Photo extends React.Component {
    render() {
        return (
            <Image source={this.props.source} />
        );
    }
	}
###给组件定义方法
从上面的例子里可以看到，给组件定义方法不再用 名字: function()的写法，而是直接用名字()，在方法的最后也不能有逗号了。

	//ES5 
	var Photo = React.createClass({
    componentWillMount: function(){

    },
    render: function() {
        return (
            <Image source={this.props.source} />
        );
    },
	});

	//ES6
	class Photo extends React.Component {
    componentWillMount() {

    }
    render() {
        return (
            <Image source={this.props.source} />
        );
    }
	}
###定义组件的属性类型和默认属性
在ES5里，属性类型和默认属性分别通过propTypes成员和getDefaultProps方法来实现

	//ES5 
	var Video = React.createClass({
    getDefaultProps: function() {
        return {
            autoPlay: false,
            maxLoops: 10,
        };
    },
    propTypes: {
        autoPlay: React.PropTypes.bool.isRequired,
        maxLoops: React.PropTypes.number.isRequired,
        posterFrameSrc: React.PropTypes.string.isRequired,
        videoSrc: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            <View />
        );
    },
	});
在ES6里，可以统一使用static成员来实现

	//ES6
	class Video extends React.Component {
    static defaultProps = {
        autoPlay: false,
        maxLoops: 10,
    };  // 注意这里有分号
    static propTypes = {
        autoPlay: React.PropTypes.bool.isRequired,
        maxLoops: React.PropTypes.number.isRequired,
        posterFrameSrc: React.PropTypes.string.isRequired,
        videoSrc: React.PropTypes.string.isRequired,
    };  // 注意这里有分号
    render() {
        return (
            <View />
        );
    } // 注意这里既没有分号也没有逗号
	}
###初始化STATE
ES5下情况类似，

	//ES5 
	var Video = React.createClass({
    getInitialState: function() {
        return {
            loopsRemaining: this.props.maxLoops,
        };
    },
	})
ES6下

	class Video extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loopsRemaining: this.props.maxLoops,
        };
    }
	}
###把方法作为回调提供
ES5下

	//ES5
	var PostInfo = React.createClass({
    handleOptionsButtonClick: function(e) {
        // Here, 'this' refers to the component instance.
        this.setState({showOptionsModal: true});
    },
    render: function(){
        return (
            <TouchableHighlight onPress={this.handleOptionsButtonClick}>
                <Text>{this.props.label}</Text>
            </TouchableHighlight>
        )
    },
	});
在ES5下，React.createClass会把所有的方法都bind一遍，这样可以提交到任意的地方作为回调函数，而this不会变化。但官方现在逐步认为这反而是不标准、不易理解的。

在ES6下，你需要通过bind来绑定this引用，或者使用箭头函数（它会绑定当前scope的this引用）来调用

	//ES6
	class PostInfo extends React.Component
	{
    handleOptionsButtonClick(e){
        this.setState({showOptionsModal: true});
    }
    render(){
        return (
            <TouchableHighlight 
                onPress={this.handleOptionsButtonClick.bind(this)}
                onPress={e=>this.handleOptionsButtonClick(e)}
                >
                <Text>{this.props.label}</Text>
            </TouchableHighlight>
        )
    },
	}