import Component from 'flarum/Component';
import fullTime from 'flarum/helpers/fullTime';
import username from 'flarum/helpers/username';

export default class WarningPreview extends Component {
    init() {
        super.init();

        this.warning = this.props.warning;
    }

    view() {
        const formatedDate = fullTime(this.warning.createdAt());
        return (
            <a className="WarningPreview" href={app.route('user.warnings', { username: this.warning.warnedUser().username() })} config={m.route}>
                <div className="WarningListItem-main">
                    <h3 className="WarningListItem-title">
                        {app.translator.trans('askvortsov-moderator-warnings.forum.post.warning', {
                            strikes: this.warning.strikes(),
                            mod_username: username(this.warning.addedByUser())
                        })}
                    </h3>
                    {formatedDate}
                    <br />
                    <ul className="WarningListItem-info">
                        <li>
                            <h4 className="WarningListItem-subtitle">{app.translator.trans('askvortsov-moderator-warnings.forum.warning_list_item.public_comment')}</h4>
                            <span>{this.warning.public_comment()}</span>
                        </li>
                        {app.session.user.canManageWarnings() ?
                            <li>
                                <h4 className="WarningListItem-subtitle">{app.translator.trans('askvortsov-moderator-warnings.forum.warning_list_item.private_comment')}</h4>
                                <span>{this.warning.private_comment()}</span>
                            </li> : ''}
                    </ul>
                </div>
            </a>
        );
    }
}