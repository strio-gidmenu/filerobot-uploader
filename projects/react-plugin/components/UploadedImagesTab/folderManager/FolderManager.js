import React, { Component, Fragment } from 'react';
import {
  EmptyNote,
  Folder,
  FolderIcon,
  FolderManagerWrapper,
  FolderToggleWrapper,
  Overlay
} from './folderManager.styled';
import FolderItem from './FolderItem';
import { I18n } from 'react-i18nify';
import BreadCrumbs from './bread-crumbs';


class FolderManager extends Component {
  constructor() {
    super();

    this.state = {
      showFileManager: false
    };
  }

  toggleSideMenu = () => {
    const showFileManager = !this.state.showFileManager;

    this.setState({ showFileManager });
  }

  render() {
    const { showFileManager } = this.state;
    const { folders = [], path, rootDir, isLoading } = this.props;

    return (
      <Fragment>
        <FolderToggleWrapper onClick={this.toggleSideMenu}>
          <FolderIcon/>

          <BreadCrumbs {...{ path }}/>
          {/*<FolderTitle>*/}
          {/*  {I18n.t('file_manager.change_folder')}*/}
          {/*</FolderTitle>*/}
        </FolderToggleWrapper>

        <FolderManagerWrapper showFileManager={showFileManager}>
          {/*<CloseManagerBtn onClick={this.toggleSideMenu}/>*/}
          {/*<ManagerHeader>*/}
          {/*  <ManagerHeaderTitle>*/}
          {/*    {I18n.t('file_manager.media_library')}*/}
          {/*  </ManagerHeaderTitle>*/}
          {/*  */}
          {/*</ManagerHeader>*/}

          {path && (path !== rootDir) && !isLoading &&
          <Folder onClick={this.props.goToLevelUpFolder}>
            <span className="btn-back"/>
            <Folder.Name title={I18n.t('file_manager.go_back')}>{'../'}</Folder.Name>
          </Folder>}

          {!isLoading && folders.map(folder => (
            <FolderItem
              key={folder.uuid}
              folder={folder}
              changeFolder={this.props.changeFolder}
            />
          ))}

          {!isLoading && folders.length === 0 &&
          <EmptyNote>{I18n.t('file_manager.no_subfolders')}</EmptyNote>}
        </FolderManagerWrapper>

        <Overlay show={showFileManager} onClick={this.toggleSideMenu}/>
      </Fragment>
    );
  }
}

export default FolderManager;