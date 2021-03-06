import * as React from "react";
import {connect} from "react-redux";
import {ImageField, Filter, SearchInput, useTranslate, List, Datagrid, TextField} from 'react-admin';
import {makeStyles, Chip} from '@material-ui/core';

// ReferenceField의 source는 forignkey, reference는 참조할 테이블 명시하는 것

const WebFont = require('webfontloader');


WebFont.load({
    google: {
        families: ['Do Hyeon', 'Sansita Swashed']
    }
});

const useQuickFilterStyles = makeStyles(theme => ({
    chip: {
        marginBottom: theme.spacing(1),
    },
}));
const QuickFilter = ({label}) => {
    const translate = useTranslate();
    const classes = useQuickFilterStyles();
    return <Chip className={classes.chip} label={translate(label)}/>;
};

//<QuickFilter source="memberCount" label="high score" defaultValue={5}/>
const PostFilter = props => (
    <Filter {...props}>
        <SearchInput source="q" alwaysOn/>
    </Filter>
);



export const UserList = props => {
    return (
        <React.Fragment>
            <List {...props} filters={<PostFilter/>} sort={{ field: 'memberCount', order: 'DESC' }} bulkActionButtons = {false}>
                <Datagrid style={{fontFamily: 'Do Hyeon'}}>
                    <TextField source="id"/>
                    <TextField source="memberId"/>
                    <TextField source="memberName"/>
                    <TextField source="memberCount"/>
                    {/* <ImageField source="memberFace" /> */}
                </Datagrid>
            </List>
        </React.Fragment>
    );
};


export default UserList;

