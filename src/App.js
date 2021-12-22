import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegLogin from "./components/pages/regular/reg-login/RegLogin";
import RegForgotPassword from "./components/pages/regular/reg-forgot-password/RegForgotPassword";
import RegNewPassword from "./components/pages/regular/reg-forgot-password/RegNewPassword";
import RegDonation from "./components/pages/regular/reg-donation/RegDonation";
import RegSignup from "./components/pages/regular/reg-signup/RegSignup";
import RegMsgResetPassword from "./components/pages/regular/reg-messages/RegMsgResetPassword";
import RegMsgEmailVerify from "./components/pages/regular/reg-messages/RegMsgEmailVerify";
import RegMsgSuccessPasswordReset from "./components/pages/regular/reg-messages/RegMsgSuccessPasswordReset";
import RegMsgSuccessVerification from "./components/pages/regular/reg-messages/RegMsgSuccessVerification";
import RegMsgDonationSuccess from "./components/pages/regular/reg-messages/RegMsgDonationSuccess";
import RegDashboardOverview from "./components/pages/regular/reg-dashboard/RegDashboardOverview";
import RegDashboardMyProfile from "./components/pages/regular/reg-dashboard/RegDashboardMyProfile";
import RegDashboardSponsor from "./components/pages/regular/reg-dashboard/RegDashboardSponsor";
import RegChildrenlist from "./components/pages/regular/reg-childrenlist/RegChildrenlist";
import RegChildSingle from "./components/pages/regular/reg-childrenlist/RegChildSingle";
import RegChildSponsorGuest from "./components/pages/regular/reg-checkout/RegChildSponsorGuest";
import RegCheckoutChildren from "./components/pages/regular/reg-checkout/RegCheckoutChildren";
import AdmLogin from "./components/pages/admin/adm-login/AdmLogin";
import AdmDafaultPassword from "./components/pages/admin/adm-login/AdmDafaultPassword";
import AdmForgotPassword from "./components/pages/admin/adm-reset/AdmForgotPassword";
import AdmNewPassword from "./components/pages/admin/adm-reset/AdmNewPassword";
import AdmDashboardOverview from "./components/pages/admin/adm-dashboard/AdmDashboardOverview";
import AdmUsers from "./components/pages/admin/adm-users/AdmUsers";
import AdmChildren from "./components/pages/admin/adm-children/AdmChildren";
import AdmManualDonation from "./components/pages/admin/adm-manual-donation/AdmManualDonation";
import AdmDonors from "./components/pages/admin/adm-donor/AdmDonors";
import AdmDashboardSearch from "./components/pages/admin/adm-dashboard/AdmDashboardSearch";
import AdmDesignation from "./components/pages/admin/adm-disignation/AdmDesignation";
import { StoreProvider } from "./store/StoreContext";
import PageNotFound from "./components/pages/404/PageNotFound";

function App() {
  return (
    <>
      <StoreProvider>
        <Router>
          <Switch>
            <Route exact path="/donor-login" component={RegLogin} />
            <Route
              exact
              path="/donor-forgot-password"
              component={RegForgotPassword}
            />
            <Route
              exact
              path="/donor-set-password"
              component={RegNewPassword}
            />
            <Route exact path="/donor-donation" component={RegDonation} />
            <Route exact path="/donor-signup" component={RegSignup} />
            <Route
              exact
              path="/donor-guest-option"
              component={RegChildSponsorGuest}
            />
            <Route
              exact
              path="/donor-checkout"
              component={RegCheckoutChildren}
            />
            <Route
              exact
              path="/message-reset-password"
              component={RegMsgResetPassword}
            />
            <Route
              exact
              path="/message-email-verify"
              component={RegMsgEmailVerify}
            />
            <Route
              exact
              path="/message-donation-success"
              component={RegMsgDonationSuccess}
            />
            <Route
              exact
              path="/message-success-verify-email"
              component={RegMsgSuccessVerification}
            />
            <Route
              exact
              path="/message-success-reset-password"
              component={RegMsgSuccessPasswordReset}
            />
            <Route
              exact
              path="/donor-dashboard-overview"
              component={RegDashboardOverview}
            />
            <Route
              exact
              path="/donor-dashboard-profile"
              component={RegDashboardMyProfile}
            />
            <Route
              exact
              path="/donor-dashboard-sponsor"
              component={RegDashboardSponsor}
            />
            <Route exact path="/children-list" component={RegChildrenlist} />
            <Route exact path="/child-info" component={RegChildSingle} />
            <Route exact path="/admin-login" component={AdmLogin} />
            <Route exact path="/404" component={PageNotFound} />
            <Route
              exact
              path="/admin-forgot-password"
              component={AdmForgotPassword}
            />
            <Route
              exact
              path="/admin-dafault-password"
              component={AdmDafaultPassword}
            />
            <Route
              exact
              path="/admin-new-password"
              component={AdmNewPassword}
            />
            <Route
              exact
              path="/admin-overview"
              component={AdmDashboardOverview}
            />
            <Route exact path="/admin-user" component={AdmUsers} />
            <Route exact path="/admin-children" component={AdmChildren} />
            <Route
              exact
              path="/admin-manual-donation"
              component={AdmManualDonation}
            />
            <Route exact path="/admin-donors" component={AdmDonors} />
            <Route
              exact
              path="/admin-dashboard-search"
              component={AdmDashboardSearch}
            />
            <Route exact path="/admin-designation" component={AdmDesignation} />
          </Switch>
        </Router>
      </StoreProvider>
    </>
  );
}

export default App;
