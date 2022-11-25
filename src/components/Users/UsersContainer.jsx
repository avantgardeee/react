import React from "react";
import {connect} from "react-redux";
import {
    setCurrentPage,
    toggleFollowingProgress, requestUsers, unfollow, follow,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage,pageSize}=this.props
        this.props.getUsers(currentPage,pageSize)
    }

    onPageChanged = (pageNumber) => {
        const {setCurrentPage,getUsers}=this.props
        setCurrentPage(pageNumber);
        getUsers(pageNumber,this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching?<Preloader/>:null}
            <Users totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        followingInProgress={this.props.followingInProgress}
        />
        </>
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress:state.usersPage.followingInProgress,
//
//     }
// }
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress:getFollowingInProgress(state),

    }
}

export default connect(mapStateToProps, {
    setCurrentPage,toggleFollowingProgress,
    getUsers: requestUsers,follow,unfollow
    })(UsersContainer);