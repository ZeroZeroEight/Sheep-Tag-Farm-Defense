
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Dialog Click
//===========================================================================
const Trig_Dialog_Click_Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C = (): boolean => {


	if ( ( ! ( GetClickedButtonBJ() === udg_Button[ 10 ] ) ) ) {

		return false;

	}

	return true;

};


const Trig_Dialog_Click_Func001Func001Func001Func001Func001Func001Func001Func001Func001C = (): boolean => {


	if ( ( ! ( GetClickedButtonBJ() === udg_Button[ 9 ] ) ) ) {

		return false;

	}

	return true;

};


const Trig_Dialog_Click_Func001Func001Func001Func001Func001Func001Func001Func001C = (): boolean => {


	if ( ( ! ( GetClickedButtonBJ() === udg_Button[ 8 ] ) ) ) {

		return false;

	}

	return true;

};


const Trig_Dialog_Click_Func001Func001Func001Func001Func001Func001Func001C = (): boolean => {


	if ( ( ! ( GetClickedButtonBJ() === udg_Button[ 7 ] ) ) ) {

		return false;

	}

	return true;

};


const Trig_Dialog_Click_Func001Func001Func001Func001Func001Func001C = (): boolean => {


	if ( ( ! ( GetClickedButtonBJ() === udg_Button[ 6 ] ) ) ) {

		return false;

	}

	return true;

};


const Trig_Dialog_Click_Func001Func001Func001Func001Func001C = (): boolean => {


	if ( ( ! ( GetClickedButtonBJ() === udg_Button[ 5 ] ) ) ) {

		return false;

	}

	return true;

};


const Trig_Dialog_Click_Func001Func001Func001Func001C = (): boolean => {


	if ( ( ! ( GetClickedButtonBJ() === udg_Button[ 4 ] ) ) ) {

		return false;

	}

	return true;

};


const Trig_Dialog_Click_Func001Func001Func001C = (): boolean => {


	if ( ( ! ( GetClickedButtonBJ() === udg_Button[ 3 ] ) ) ) {

		return false;

	}

	return true;

};


const Trig_Dialog_Click_Func001Func001C = (): boolean => {


	if ( ( ! ( GetClickedButtonBJ() === udg_Button[ 2 ] ) ) ) {

		return false;

	}

	return true;

};


const Trig_Dialog_Click_Func001C = (): boolean => {


	if ( ( ! ( GetClickedButtonBJ() === udg_Button[ 1 ] ) ) ) {

		return false;

	}

	return true;

};


const Trig_Dialog_Click_Func003Func001C = (): boolean => {


	if ( ( ! ( udg_Continue[ 1 ] === 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Dialog_Click_Func003C = (): boolean => {


	if ( ( ! ( udg_Continue[ 0 ] > 1 ) ) ) {

		return false;

	}


	if ( ( ! ( udg_Continue[ 0 ] < 99 ) ) ) {

		return false;

	}


	if ( ( ! ( udg_Continue[ 1 ] > 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Dialog_Click_Actions = (): void => {


	if ( ( Trig_Dialog_Click_Func001C() ) ) {

		udg_SetupString[ 1 ] = "|cffffcc00Round Time: |rShort - 2 Minutes";
		udg_TimeModifier = 1;
		ConditionalTriggerExecute( gg_trg_Modify_Difficulty )

	} else {


		if ( ( Trig_Dialog_Click_Func001Func001C() ) ) {

			udg_SetupString[ 1 ] = "|cffffcc00Round Time: |rNormal - 3 Minutes";
			udg_TimeModifier = 1.5;
			ConditionalTriggerExecute( gg_trg_Modify_Difficulty )

		} else {


			if ( ( Trig_Dialog_Click_Func001Func001Func001C() ) ) {

				udg_SetupString[ 1 ] = "|cffffcc00Round Time: |rLong - 4 Minutes";
				udg_TimeModifier = 2;
				ConditionalTriggerExecute( gg_trg_Modify_Difficulty )

			} else {


				if ( ( Trig_Dialog_Click_Func001Func001Func001Func001C() ) ) {

					udg_SetupString[ 2 ] = "|cffffcc00Difficulty: |rAmateur - 15 Normal Levels (2 continues)";
					udg_SetupString[ 0 ] = "Amateur";
					udg_Continue[ 1 ] = 2;
					udg_TurnSpeed = 1;
					ConditionalTriggerExecute( gg_trg_Modify_Saving )

				} else {


					if ( ( Trig_Dialog_Click_Func001Func001Func001Func001Func001C() ) ) {

						udg_SetupString[ 2 ] = "|cffffcc00Difficulty: |rProfessional - 15 Hard Levels (1 continue)";
						udg_SetupString[ 0 ] = "Professional";
						udg_Continue[ 1 ] = 1;
						udg_TurnSpeed = 1.35;
						ConditionalTriggerExecute( gg_trg_Modify_Saving )

					} else {


						if ( ( Trig_Dialog_Click_Func001Func001Func001Func001Func001Func001C() ) ) {

							udg_SetupString[ 2 ] = "|cffffcc00Difficulty: |rHeroic - 15 Insane Levels (0 continues)";
							udg_SetupString[ 0 ] = "Heroic";
							udg_Continue[ 1 ] = 0;
							ConditionalTriggerExecute( gg_trg_Modify_Saving )
							udg_TurnSpeed = 1.7;

						} else {


							if ( ( Trig_Dialog_Click_Func001Func001Func001Func001Func001Func001Func001C() ) ) {

								udg_SetupString[ 3 ] = "|cffffcc00Revive Method: |rNormal - Kill Spirits to Save";
								udg_SetupString[ 4 ] = "Amateur";
								udg_RoundInfo[ 0 ] = 0;

							} else {


								if ( ( Trig_Dialog_Click_Func001Func001Func001Func001Func001Func001Func001Func001C() ) ) {

									udg_SetupString[ 3 ] = "|cffffcc00Revive Method: |rRound - Revive on Round End";
									udg_SetupString[ 4 ] = "Professional";
									udg_RoundInfo[ 0 ] = 0;

								} else {


									if ( ( Trig_Dialog_Click_Func001Func001Func001Func001Func001Func001Func001Func001Func001C() ) ) {

										udg_SetupString[ 3 ] = "|cffffcc00Revive Method: |rRevive - 2 Revives Per Player";
										udg_SetupString[ 4 ] = "Heroic";
										udg_RoundInfo[ 0 ] = 0;

									} else {


										if ( ( Trig_Dialog_Click_Func001Func001Func001Func001Func001Func001Func001Func001Func001Func001C() ) ) {

											udg_SetupString[ 1 ] = "|cffffcc00Round Time: |rSample - 45 seconds";
											udg_TimeModifier = 0.38;
											ConditionalTriggerExecute( gg_trg_Modify_Difficulty )

										} else {

										null

										}


									}


								}


							}


						}


					}


				}


			}


		}


	}

	ClearTextMessagesBJ( GetPlayersAll() )

	if ( ( Trig_Dialog_Click_Func003C() ) ) {

		DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             |cffffcc00Continue used! The game will begin at round |r" + ( I2S( udg_RoundInfo[ 1 ] ) + "|cffffcc00." ) ) )
		DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             |Cffffcc00You have|r " + ( I2S( udg_Continue[ 1 ] ) + "|cffffcc00 continue(s) remaining." ) ) )
		DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_1142" )
		DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + ( udg_PlayerColor[ GetConvertedPlayerId( udg_Host ) ] + ( GetPlayerName( udg_Host ) + "|r |cffffcc00may type|r -cancel |cffffcc00to restart the game." ) ) ) )
		DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_1143" )
		DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 1 ] ) )
		DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 2 ] ) )
		DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 3 ] ) )

	} else {


		if ( ( Trig_Dialog_Click_Func003Func001C() ) ) {

			DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_1140" )
			DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + ( udg_PlayerColor[ GetConvertedPlayerId( udg_Host ) ] + ( GetPlayerName( udg_Host ) + "|r |cffffcc00can hit|r Esc |cffffcc00to modify settings." ) ) ) )
			DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_1141" )
			DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 1 ] ) )
			DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 2 ] ) )
			DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 3 ] ) )

		} else {

			DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + ( udg_PlayerColor[ GetConvertedPlayerId( udg_Host ) ] + ( GetPlayerName( udg_Host ) + "|r |cffffcc00can hit|r Esc |cffffcc00to modify settings." ) ) ) )
			DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_1139" )
			DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 1 ] ) )
			DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 2 ] ) )
			DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             " + udg_SetupString[ 3 ] ) )

		}


	}


};


//===========================================================================
const InitTrig_Dialog_Click = (): void => {

	gg_trg_Dialog_Click = CreateTrigger();
	TriggerRegisterDialogEventBJ( gg_trg_Dialog_Click, udg_Dialog )
	TriggerAddAction( gg_trg_Dialog_Click, Trig_Dialog_Click_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Dialog_Click();

} );
