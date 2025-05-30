import React from 'react';
import { ComponentPreviewPage, MarkdownPage, HomePage } from '../../pages';

// API Docs markdown
import DrawerNavGroupAPIDocs from '../../componentDocs/DrawerNavGroup/markdown/DrawerNavGroupAPIDocs.mdx';
import DrawerAPIDocs from '../../componentDocs/Drawer/markdown/DrawerAPIDocs.mdx';
import DrawerHeaderAPIDocs from '../../componentDocs/DrawerHeader/markdown/DrawerHeaderAPIDocs.mdx';
import DrawerFooterAPIDocs from '../../componentDocs/DrawerFooter/markdown/DrawerFooterAPIDocs.mdx';
import DrawerBodyAPIDocs from '../../componentDocs/DrawerBody/markdown/DrawerBodyAPIDocs.mdx';
import DrawerRailItemAPIDocs from '../../componentDocs/DrawerRailItem/markdown/DrawerRailItemAPIDocs.mdx';
import DrawerNavItemAPIDocs from '../../componentDocs/DrawerNavItem/markdown/DrawerNavItemAPIDocs.mdx';
import DrawerLayoutAPIDocs from '../../componentDocs/DrawerLayout/markdown/DrawerLayoutAPIDocs.mdx';
import DrawerSubheaderAPIDocs from '../../componentDocs/DrawerSubheader/markdown/DrawerSubheaderAPIDocs.mdx';
import ChannelValueAPIDocs from '../../componentDocs/ChannelValue/markdown/ChannelValueAPIDocs.mdx';
import EmptyStateAPIDocs from '../../componentDocs/EmptyState/markdown/EmptyStateAPIDocs.mdx';
import HeroAPIDocs from '../../componentDocs/Hero/markdown/HeroAPIDocs.mdx';
import InfoListItemAPIDocs from '../../componentDocs/InfoListItem/markdown/InfoListItemAPIDocs.mdx';
import AppBarAPIDocs from '../../componentDocs/AppBar/markdown/AppBarAPIDocs.mdx';
import ListItemTagAPIDocs from '../../componentDocs/ListItemTag/markdown/ListItemTagAPIDocs.mdx';
import UserMenuAPIDocs from '../../componentDocs/UserMenu/markdown/UserMenuAPIDocs.mdx';
import ThreeLinerAPIDocs from '../../componentDocs/ThreeLiner/markdown/ThreeLinerAPIDocs.mdx';
import SpacerAPIDocs from '../../componentDocs/Spacer/markdown/SpacerAPIDocs.mdx';
import ScoreCardAPIDocs from '../../componentDocs/ScoreCard/markdown/ScoreCardAPIDocs.mdx';
import ToolbarMenuAPIDocs from '../../componentDocs/ToolbarMenu/markdown/ToolbarMenuAPIDocs.mdx';

// workflow docs
import WorkflowOverview from '../../markdownDocs/workflowDocs/Overview/overview.mdx';
import AuthenticationWorkflow from '../../markdownDocs/workflowDocs/AuthenticationWorkflow/authenticationWorkflow.mdx';
import RegistrationWorkflow from '../../markdownDocs/workflowDocs/RegistrationWorkflow/registrationWorkflow.mdx';
import WorkflowCustomization from '../../markdownDocs/workflowDocs/Customization/customization.mdx';
import ErrorManagement from '../../markdownDocs/workflowDocs/ErrorManagement/errorManagement.mdx';
import LanguageSupport from '../../markdownDocs/workflowDocs/LanguageSupport/languageSupport.mdx';
import ErrorHandling from '../../markdownDocs/workflowDocs/ErrorHandling/errorHandling.mdx';
import Routing from '../../markdownDocs/workflowDocs/Routing/routing.mdx';

// workflow components
import BasicDialog from '../../markdownDocs/workflowDocs/Components/BasicDialog/basicDialog.mdx';
import ErrorManager from '../../markdownDocs/workflowDocs/Components/ErrorManager/errorManager.mdx';
import PasswordTextField from '../../markdownDocs/workflowDocs/Components/PasswordTextField/passwordTextField.mdx';
import SetPassword from '../../markdownDocs/workflowDocs/Components/SetPassword/setPassword.mdx';
import WorkflowCard from '../../markdownDocs/workflowDocs/Components/WorkflowCard/workflowCard.mdx';
import WorkflowComponents from '../../markdownDocs/workflowDocs/Components/components.mdx';

// workflow screens
import WorkflowScreens from '../../markdownDocs/workflowDocs/Screens/screens.mdx';
import AccountDetails from '../../markdownDocs/workflowDocs/Screens/AccountDetails/accountDetails.mdx';
import ChangePassword from '../../markdownDocs/workflowDocs/Screens/ChangePassword/changePassword.mdx';
import Contact from '../../markdownDocs/workflowDocs/Screens/Contact/contact.mdx';
import CreateAccount from '../../markdownDocs/workflowDocs/Screens/CreateAccount/createAccount.mdx';
import CreatePassword from '../../markdownDocs/workflowDocs/Screens/CreatePassword/createPassword.mdx';
import Eula from '../../markdownDocs/workflowDocs/Screens/Eula/eula.mdx';
import ExistingAccountSuccess from '../../markdownDocs/workflowDocs/Screens/ExistingAccountSuccess/existingAccountSuccess.mdx';
import ForgotPassword from '../../markdownDocs/workflowDocs/Screens/ForgotPassword/forgotPassword.mdx';
import Login from '../../markdownDocs/workflowDocs/Screens/Login/login.mdx';
import OktaLogin from '../../markdownDocs/workflowDocs/Screens/OktaLogin/oktaLogin.mdx';
import RegistrationSuccess from '../../markdownDocs/workflowDocs/Screens/RegistrationSuccess/registrationSuccess.mdx';
import ResetPassword from '../../markdownDocs/workflowDocs/Screens/ResetPassword/resetPassword.mdx';
import Success from '../../markdownDocs/workflowDocs/Screens/Success/success.mdx';
import VerifyCode from '../../markdownDocs/workflowDocs/Screens/VerifyCode/verifyCode.mdx';

// Examples markdown
import DrawerNavItemExamples from '../../componentDocs/DrawerNavItem/markdown/DrawerNavItemExamples.mdx';
import DrawerFooterExamples from '../../componentDocs/DrawerFooter/markdown/DrawerFooterExamples.mdx';
import DrawerBodyExamples from '../../componentDocs/DrawerBody/markdown/DrawerBodyExamples.mdx';
import DrawerNavGroupExamples from '../../componentDocs/DrawerNavGroup/markdown/DrawerNavGroupExamples.mdx';
import DrawerExamples from '../../componentDocs/Drawer/markdown/DrawerExamples.mdx';
import DrawerHeaderExamples from '../../componentDocs/DrawerHeader/markdown/DrawerHeaderExamples.mdx';
import DrawerSubheaderExamples from '../../componentDocs/DrawerSubheader/markdown/DrawerSubheaderExamples.mdx';
import EmptyStateExamples from '../../componentDocs/EmptyState/markdown/EmptyStateExamples.mdx';
import HeroExamples from '../../componentDocs/Hero/markdown/HeroExamples.mdx';
import ListItemTagExamples from '../../componentDocs/ListItemTag/markdown/ListItemTagExamples.mdx';
import InfoListItemExamples from '../../componentDocs/InfoListItem/markdown/InfoListItemExamples.mdx';
import DrawerLayoutExamples from '../../componentDocs/DrawerLayout/markdown/DrawerLayoutExamples.mdx';
import AppBarExamples from '../../componentDocs/AppBar/markdown/AppBarExamples.mdx';
import UserMenuExamples from '../../componentDocs/UserMenu/markdown/UserMenuExamples.mdx';
import ChannelValueExamples from '../../componentDocs/ChannelValue/markdown/ChannelValueExamples.mdx';
import ToolbarMenuExamples from '../../componentDocs/ToolbarMenu/markdown/ToolbarMenuExamples.mdx';
import ScoreCardExamples from '../../componentDocs/ScoreCard/markdown/ScoreCardExamples.mdx';
import SpacerExamples from '../../componentDocs/Spacer/markdown/SpacerExamples.mdx';
import ThreeLinerExamples from '../../componentDocs/ThreeLiner/markdown/ThreeLinerExamples.mdx';
import DrawerRailItemExamples from '../../componentDocs/DrawerRailItem/markdown/DrawerRailItemExamples.mdx';

// Playground components
import { AppBarPlaygroundComponent } from '../../componentDocs/AppBar/playground/PlaygroundPage';
import { ChannelValuePlaygroundComponent } from '../../componentDocs/ChannelValue/playground';
import { DrawerPlaygroundComponent } from '../../componentDocs/Drawer/playground';
import { DrawerHeaderPlaygroundComponent } from '../../componentDocs/DrawerHeader/playground';
import { DrawerSubheaderPlaygroundComponent } from '../../componentDocs/DrawerSubheader/playground';
import { DrawerFooterPlaygroundComponent } from '../../componentDocs/DrawerFooter/playground';
import { DrawerNavGroupPlaygroundComponent } from '../../componentDocs/DrawerNavGroup/playground';
import { DrawerNavItemPlaygroundComponent } from '../../componentDocs/DrawerNavItem/playground';
import { DrawerRailItemPlaygroundComponent } from '../../componentDocs/DrawerRailItem/playground';
import { EmptyStatePlaygroundComponent } from '../../componentDocs/EmptyState/playground';
import { HeroPlaygroundComponent } from '../../componentDocs/Hero/playground';
import { InfoListItemPlaygroundComponent } from '../../componentDocs/InfoListItem/playground';
import { ListItemTagPlaygroundComponent } from '../../componentDocs/ListItemTag/playground';
import { ScoreCardPlaygroundComponent } from '../../componentDocs/ScoreCard/playground';
import { ThreeLinerPlaygroundComponent } from '../../componentDocs/ThreeLiner/playground';
import { ToolbarMenuPlaygroundComponent } from '../../componentDocs/ToolbarMenu/playground';
import { UserMenuPlaygroundComponent } from '../../componentDocs/UserMenu/playground';
import { Outlet, RouteProps } from 'react-router';
import { OpenInNew } from '@mui/icons-material';
import { Box } from '@mui/material';
import { ListItemTag } from '@brightlayer-ui/react-components';

// Site markdown docs
import * as markdownDocs from '../../markdownDocs/';

export type RouteConfig = Omit<RouteProps, 'children'> & {
    title: string;
    icon?: JSX.Element;
    pages?: RouteConfig[];
    children?: RouteConfig[];
    hidden?: boolean;
};

export const pageDefinitions: RouteConfig[] = [
    {
        title: 'Home',
        path: '/',
        element: <HomePage />,
        hidden: true,
    },
    {
        title: 'Getting Started',
        path: '/getting-started/',
        element: <Outlet />,
        pages: [
            {
                title: 'Environment',
                path: 'environment',
                element: <MarkdownPage title={'Environment Setup'} markdown={markdownDocs.Environment} />,
            },
            {
                title: 'Start a BLUI Project',
                path: 'start-a-project',
                element: <MarkdownPage title={'Start a Brightlayer UI Project'} markdown={markdownDocs.React} />,
            },
            {
                title: 'Testing a BLUI Project',
                path: 'test-a-project',
                element: (
                    <MarkdownPage title={'Testing Brightlayer UI Projects'} markdown={markdownDocs.ReactTesting} />
                ),
            },
        ],
    },
    {
        title: 'Components',
        path: '/components/',
        element: <Outlet />,
        pages: [
            {
                title: 'All Components',
                path: 'component-catalog',
                element: <MarkdownPage title={'Components'} markdown={markdownDocs.AllComponents} />,
            },
            {
                title: 'App Bar',
                path: 'app-bar/',
                element: <ComponentPreviewPage title={'App Bar'} />,
                children: [
                    {
                        title: 'examples',
                        path: 'examples',
                        element: <AppBarExamples />,
                    },
                    {
                        title: 'API Docs',
                        path: 'api-docs',
                        element: <AppBarAPIDocs />,
                    },
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <AppBarPlaygroundComponent />,
                    },
                ],
            },
            {
                title: 'Channel Value',
                path: 'channel-value/',
                element: <ComponentPreviewPage title={'Channel Value'} />,
                children: [
                    {
                        title: 'examples',
                        path: 'examples',
                        element: <ChannelValueExamples />,
                    },
                    {
                        title: 'API Docs',
                        path: 'api-docs',
                        element: <ChannelValueAPIDocs />,
                    },
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <ChannelValuePlaygroundComponent />,
                    },
                ],
            },
            {
                title: 'Drawer',
                path: '',
                pages: [
                    {
                        title: 'Drawer Layout',
                        path: 'drawer-layout/',
                        element: <ComponentPreviewPage title={'Drawer Layout'} />,
                        children: [
                            {
                                title: 'examples',
                                path: 'examples',
                                element: <DrawerLayoutExamples />,
                            },
                            {
                                title: 'API Docs',
                                path: 'api-docs',
                                element: <DrawerLayoutAPIDocs />,
                            },
                        ],
                    },
                    {
                        title: 'Drawer',
                        path: 'drawer/',
                        element: <ComponentPreviewPage title={'Drawer'} />,
                        children: [
                            {
                                title: 'examples',
                                path: 'examples',
                                element: <DrawerExamples />,
                            },
                            {
                                title: 'API Docs',
                                path: 'api-docs',
                                element: <DrawerAPIDocs />,
                            },
                            {
                                title: 'playground',
                                path: 'playground',
                                element: <DrawerPlaygroundComponent />,
                            },
                        ],
                    },
                    {
                        title: 'Drawer Header',
                        path: 'drawer-header/',
                        element: <ComponentPreviewPage title={'Drawer Header'} />,
                        children: [
                            {
                                title: 'examples',
                                path: 'examples',
                                element: <DrawerHeaderExamples />,
                            },
                            {
                                title: 'API Docs',
                                path: 'api-docs',
                                element: <DrawerHeaderAPIDocs />,
                            },
                            {
                                title: 'playground',
                                path: 'playground',
                                element: <DrawerHeaderPlaygroundComponent />,
                            },
                        ],
                    },
                    {
                        title: 'Drawer Subheader',
                        path: 'drawer-subheader/',
                        element: <ComponentPreviewPage title={'Drawer Subheader'} />,
                        children: [
                            {
                                title: 'examples',
                                path: 'examples',
                                element: <DrawerSubheaderExamples />,
                            },
                            {
                                title: 'API Docs',
                                path: 'api-docs',
                                element: <DrawerSubheaderAPIDocs />,
                            },
                            {
                                title: 'playground',
                                path: 'playground',
                                element: <DrawerSubheaderPlaygroundComponent />,
                            },
                        ],
                    },

                    {
                        title: 'Drawer Body',
                        path: 'drawer-body/',
                        element: <ComponentPreviewPage title={'Drawer Body'} />,
                        children: [
                            {
                                title: 'examples',
                                path: 'examples',
                                element: <DrawerBodyExamples />,
                            },
                            {
                                title: 'API Docs',
                                path: 'api-docs',
                                element: <DrawerBodyAPIDocs />,
                            },
                        ],
                    },
                    {
                        title: 'Drawer Nav Group',
                        path: 'drawer-nav-group/',
                        element: <ComponentPreviewPage title={'Drawer Nav Group'} />,
                        children: [
                            {
                                title: 'examples',
                                path: 'examples',
                                element: <DrawerNavGroupExamples />,
                            },
                            {
                                title: 'API Docs',
                                path: 'api-docs',
                                element: <DrawerNavGroupAPIDocs />,
                            },
                            {
                                title: 'playground',
                                path: 'playground',
                                element: <DrawerNavGroupPlaygroundComponent />,
                            },
                        ],
                    },
                    {
                        title: 'Drawer Nav Item',
                        path: 'drawer-nav-item/',
                        element: <ComponentPreviewPage title={'Drawer Nav Item'} />,
                        children: [
                            {
                                title: 'examples',
                                path: 'examples',
                                element: <DrawerNavItemExamples />,
                            },
                            {
                                title: 'API Docs',
                                path: 'api-docs',
                                element: <DrawerNavItemAPIDocs />,
                            },
                            {
                                title: 'playground',
                                path: 'playground',
                                element: <DrawerNavItemPlaygroundComponent />,
                            },
                        ],
                    },
                    {
                        title: 'Drawer Rail Item',
                        path: 'drawer-rail-item/',
                        element: <ComponentPreviewPage title={'Drawer Rail Item'} />,
                        children: [
                            {
                                title: 'examples',
                                path: 'examples',
                                element: <DrawerRailItemExamples />,
                            },
                            {
                                title: 'API Docs',
                                path: 'api-docs',
                                element: <DrawerRailItemAPIDocs />,
                            },
                            {
                                title: 'playground',
                                path: 'playground',
                                element: <DrawerRailItemPlaygroundComponent />,
                            },
                        ],
                    },
                    {
                        title: 'Drawer Footer',
                        path: 'drawer-footer/',
                        element: <ComponentPreviewPage title={'Drawer Footer'} />,
                        children: [
                            {
                                title: 'examples',
                                path: 'examples',
                                element: <DrawerFooterExamples />,
                            },
                            {
                                title: 'API Docs',
                                path: 'api-docs',
                                element: <DrawerFooterAPIDocs />,
                            },
                            {
                                title: 'playground',
                                path: 'playground',
                                element: <DrawerFooterPlaygroundComponent />,
                            },
                        ],
                    },
                ],
            },
            {
                title: 'Empty State',
                path: 'empty-state/',
                element: <ComponentPreviewPage title={'Empty State'} />,
                children: [
                    {
                        title: 'examples',
                        path: 'examples',
                        element: <EmptyStateExamples />,
                    },
                    {
                        title: 'API Docs',
                        path: 'api-docs',
                        element: <EmptyStateAPIDocs />,
                    },
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <EmptyStatePlaygroundComponent />,
                    },
                ],
            },
            {
                title: 'Hero',
                path: 'hero/',
                element: <ComponentPreviewPage title={'Hero'} />,
                children: [
                    {
                        title: 'examples',
                        path: 'examples',
                        element: <HeroExamples />,
                    },
                    {
                        title: 'API Docs',
                        path: 'api-docs',
                        element: <HeroAPIDocs />,
                    },
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <HeroPlaygroundComponent />,
                    },
                ],
            },
            {
                title: 'Info List Item',
                path: 'info-list-item/',
                element: <ComponentPreviewPage title={'Info List Item'} />,
                children: [
                    {
                        title: 'examples',
                        path: 'examples',
                        element: <InfoListItemExamples />,
                    },
                    {
                        title: 'API Docs',
                        path: 'api-docs',
                        element: <InfoListItemAPIDocs />,
                    },
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <InfoListItemPlaygroundComponent />,
                    },
                ],
            },
            {
                title: 'List Item Tag',
                path: 'list-item-tag/',
                element: <ComponentPreviewPage title={'List Item Tag'} />,
                children: [
                    {
                        title: 'examples',
                        path: 'examples',
                        element: <ListItemTagExamples />,
                    },
                    {
                        title: 'API Docs',
                        path: 'api-docs',
                        element: <ListItemTagAPIDocs />,
                    },
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <ListItemTagPlaygroundComponent />,
                    },
                ],
            },
            {
                title: 'Score Card',
                path: 'score-card/',
                element: <ComponentPreviewPage title={'Score Card'} />,
                children: [
                    {
                        title: 'examples',
                        path: 'examples',
                        element: <ScoreCardExamples />,
                    },
                    {
                        title: 'API Docs',
                        path: 'api-docs',
                        element: <ScoreCardAPIDocs />,
                    },
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <ScoreCardPlaygroundComponent />,
                    },
                ],
            },
            {
                title: 'Spacer',
                path: 'spacer/',
                element: <ComponentPreviewPage title={'Spacer'} />,
                children: [
                    {
                        title: 'examples',
                        path: 'examples',
                        element: <SpacerExamples />,
                    },
                    {
                        title: 'API Docs',
                        path: 'api-docs',
                        element: <SpacerAPIDocs />,
                    },
                ],
            },
            {
                title: 'Three Liner',
                path: 'three-liner/',
                element: <ComponentPreviewPage title={'Three Liner'} />,
                children: [
                    {
                        title: 'examples',
                        path: 'examples',
                        element: <ThreeLinerExamples />,
                    },
                    {
                        title: 'API Docs',
                        path: 'api-docs',
                        element: <ThreeLinerAPIDocs />,
                    },
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <ThreeLinerPlaygroundComponent />,
                    },
                ],
            },
            {
                title: 'Toolbar Menu',
                path: 'toolbar-menu/',
                element: <ComponentPreviewPage title={'Toolbar Menu'} />,
                children: [
                    {
                        title: 'examples',
                        path: 'examples',
                        element: <ToolbarMenuExamples />,
                    },
                    {
                        title: 'API Docs',
                        path: 'api-docs',
                        element: <ToolbarMenuAPIDocs />,
                    },
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <ToolbarMenuPlaygroundComponent />,
                    },
                ],
            },
            {
                title: 'User Menu',
                path: 'user-menu/',
                element: <ComponentPreviewPage title={'User Menu'} />,
                children: [
                    {
                        title: 'examples',
                        path: 'examples',
                        element: <UserMenuExamples />,
                    },
                    {
                        title: 'API Docs',
                        path: 'api-docs',
                        element: <UserMenuAPIDocs />,
                    },
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <UserMenuPlaygroundComponent />,
                    },
                ],
            },
        ],
    },
    {
        title: 'Themes',
        path: '/themes/',
        element: <Outlet />,
        pages: [
            {
                title: 'Overview',
                path: 'overview',
                element: <MarkdownPage title={'Theme Overview'} markdown={markdownDocs.ThemesOverview} />,
            },
            {
                title: 'Usage',
                path: 'usage',
                element: <MarkdownPage title={'Theme Usage'} markdown={markdownDocs.ThemesUsage} />,
            },
            {
                title: 'Customization',
                path: 'customization',
                element: <MarkdownPage title={'Theme Customization'} markdown={markdownDocs.ThemeCustomization} />,
            },
        ],
    },
    {
        title: 'Workflows',
        path: '/workflows/',
        element: <Outlet />,
        pages: [
            {
                title: 'Overview',
                path: 'getting-started/',
                element: <MarkdownPage title={'Overview'} markdown={WorkflowOverview} />,
            },
            {
                title: 'Authentication Workflow',
                path: 'authentication-workflow/',
                element: <MarkdownPage title={'Authentication Workflow'} markdown={AuthenticationWorkflow} />,
            },
            {
                title: 'Registration Workflow',
                path: 'registration-workflow/',
                element: <MarkdownPage title={'Registration Workflow'} markdown={RegistrationWorkflow} />,
            },
            {
                title: 'Customization',
                path: 'customization/',
                element: <MarkdownPage title={'Customization'} markdown={WorkflowCustomization} />,
            },
            {
                title: 'Error Management',
                path: 'error-management/',
                element: <MarkdownPage title={'Error Management'} markdown={ErrorManagement} />,
            },
            {
                title: 'Language Support',
                path: 'language-support/',
                element: <MarkdownPage title={'Language Support'} markdown={LanguageSupport} />,
            },
            {
                title: 'Error Handling',
                path: 'error-handling/',
                element: <MarkdownPage title={'Error Handling'} markdown={ErrorHandling} />,
            },
            {
                title: 'Routing',
                path: 'routing/',
                element: <MarkdownPage title={'Routing'} markdown={Routing} />,
            },
            {
                title: 'Components',
                path: '',
                pages: [
                    {
                        title: 'Overview',
                        path: 'components/',
                        element: <MarkdownPage title={'Components'} markdown={WorkflowComponents} />,
                    },
                    {
                        title: 'Basic Dialog',
                        path: 'basic-dialog/',
                        element: <MarkdownPage title={'Basic Dialog'} markdown={BasicDialog} />,
                    },
                    {
                        title: 'Error Manager',
                        path: 'error-manager/',
                        element: <MarkdownPage title={'Error Manager'} markdown={ErrorManager} />,
                    },
                    {
                        title: 'Password Text Field',
                        path: 'password-text-field/',
                        element: <MarkdownPage title={'Error Manager'} markdown={PasswordTextField} />,
                    },
                    {
                        title: 'Set Password',
                        path: 'set-password/',
                        element: <MarkdownPage title={'Set Password'} markdown={SetPassword} />,
                    },
                    {
                        title: 'WorkflowCard*',
                        path: 'workflow-card/',
                        element: <MarkdownPage title={'WorkflowCard*'} markdown={WorkflowCard} />,
                    },
                ],
            },
            {
                title: 'Screens',
                path: '',
                pages: [
                    {
                        title: 'Overview',
                        path: 'screens/',
                        element: <MarkdownPage title={'Screens'} markdown={WorkflowScreens} />,
                    },
                    {
                        title: 'Account Details',
                        path: 'account-details/',
                        element: <MarkdownPage title={'Account Details'} markdown={AccountDetails} />,
                    },
                    {
                        title: 'Change Password',
                        path: 'change-password/',
                        element: <MarkdownPage title={'Change Password'} markdown={ChangePassword} />,
                    },
                    {
                        title: 'Contact',
                        path: 'contact/',
                        element: <MarkdownPage title={'Contact'} markdown={Contact} />,
                    },
                    {
                        title: 'Create Account',
                        path: 'create-account/',
                        element: <MarkdownPage title={'Create Account'} markdown={CreateAccount} />,
                    },
                    {
                        title: 'Create Password',
                        path: 'create-password/',
                        element: <MarkdownPage title={'Create Password'} markdown={CreatePassword} />,
                    },
                    {
                        title: 'Eula',
                        path: 'eula/',
                        element: <MarkdownPage title={'Eula'} markdown={Eula} />,
                    },
                    {
                        title: 'Existing Account Success',
                        path: 'existing-account-success/',
                        element: <MarkdownPage title={'Existing Account Success'} markdown={ExistingAccountSuccess} />,
                    },
                    {
                        title: 'Forgot Password',
                        path: 'forgot-password/',
                        element: <MarkdownPage title={'Forgot Password'} markdown={ForgotPassword} />,
                    },
                    {
                        title: 'Login',
                        path: 'login/',
                        element: <MarkdownPage title={'Login'} markdown={Login} />,
                    },
                    {
                        title: 'Okta Login',
                        path: 'okta-login/',
                        element: <MarkdownPage title={'Okta Login'} markdown={OktaLogin} />,
                    },
                    {
                        title: 'Registration Success',
                        path: 'registration-success/',
                        element: <MarkdownPage title={'Registration Success'} markdown={RegistrationSuccess} />,
                    },
                    {
                        title: 'Reset Password',
                        path: 'reset-password/',
                        element: <MarkdownPage title={'Reset Password'} markdown={ResetPassword} />,
                    },
                    {
                        title: 'Success',
                        path: 'success/',
                        element: <MarkdownPage title={'Success'} markdown={Success} />,
                    },
                    {
                        title: 'Verify Code',
                        path: 'verify-code/',
                        element: <MarkdownPage title={'Verify Code'} markdown={VerifyCode} />,
                    },
                ],
            },
        ],
    },
];

const openInNewTab = (url = '#'): any => {
    window.open(url);
};

export const externalLinkDefinitions = [
    {
        title: 'Resources',
        itemID: 'Resources',
        rightComponent: <OpenInNew color="disabled" />,
        onClick: (): void => openInNewTab('https://brightlayer-ui.github.io/resources/developer'),
    },
    {
        title: 'Release Notes',
        itemID: 'Release Notes',
        rightComponent: (
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <ListItemTag sx={{ mr: 1 }} label="New" />
                <OpenInNew color="disabled" />
            </Box>
        ),
        onClick: (): void => openInNewTab('https://brightlayer-ui.github.io/release-notes'),
    },
    {
        title: 'Roadmap',
        itemID: 'Roadmap',
        rightComponent: <OpenInNew color="disabled" />,
        onClick: (): void => openInNewTab('https://brightlayer-ui.github.io/roadmap'),
    },
];
