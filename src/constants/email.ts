export const SUPPORT_EMAIL = 'support@juki.app';

export const JUKI_APP_EMAIL_TEMPLATE = `<div style="width: 100%; background: #F2F2F2;">
  <div style="background: #164066; width: 100%;">
    <div style="height: 56px; color: white; width: 100px; margin: 0 auto">
      <img
        src="https://images.juki.pub/assets/juki-app-horizontal-white-logo.svg"
        alt="juki app logo"
        height="56px"
        style="padding:10px; box-sizing: border-box"
      />
    </div>
  </div>
  <div style="padding: 24px; color: #333333; font-family: sans-serif; font-size: 16px; line-height: 24px;">
    <div style="max-width: 520px; margin: 0 auto; padding: 24px; background: white; border-radius: 6px;">
      <section style="padding: 0 0 1em 0; border-bottom: 1px solid #828282;">
        {{content}}
      </section>
      <div style="font-size: 14px; text-align: center; color: #828282; line-height: 16px; padding-top: 1em">
        <p style="margin: 0;">
          Si tú no realizaste la solicitud, escribenos a
          <a href="mailto:${SUPPORT_EMAIL}" style="color: #2468A6; text-decoration: none;">
            ${SUPPORT_EMAIL}
          </a>
        </p>
        <p style="margin: 0;">
          Este mensaje fue enviado por el equipo de
          <a href="https://juki.app" style="color: #2468A6; text-decoration: none;">
            juki.app
          </a>
        </p>
      </div>
    </div>
  </div>
</div>`;
